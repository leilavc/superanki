from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import jieba
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://127.0.0.1:27017/superanki"
app.config['JSON_AS_ASCII'] = False
mongo = PyMongo(app)

@app.route('/')
def hello_world():
  return render_template('index.html')

@app.route('/sentence/add', methods=["POST"])
def sentence_add():
  content = request.json
  token_return = []
  for token_text in jieba.cut(content['sentence']):
    token = mongo.db.tokens.find_one({'text': token_text})
    if token is None:
      token_id = mongo.db.tokens.insert_one({'text': token_text}).inserted_id
    else:
      token_id = token['_id']
    token_return.append({"text": token_text, "id": str(token_id)})
  return jsonify(token_return)

@app.route('/sentence/confirm', methods=["POST"])
def sentence_confirm():
  content = request.json # json format: {'word_ids', 'tokenized_sentence'}
  print(content)
  sentence_id = mongo.db.sentences.insert_one({'tokenized': content['tokenized_sentence']}).inserted_id
  for word_id in content['word_ids']:
    word = mongo.db.tokens.find_one_and_update({'_id': ObjectId(word_id)}, {'$set': {'proficiency': 0}})
  return jsonify({'status': 'done', 'sentence_id': str(sentence_id)})

@app.route('/sentence/newest/')
def sentence_newest():
  sentence_ids = mongo.db.sentences.aggregate([{'$sample': {'size': 3 }}])
  return jsonify({"sentence_ids": [str(sentence_id['_id']) for sentence_id in sentence_ids]})

@app.route('/sentence/id/<string:sentence_id>/')
def sentence_show(sentence_id):
  sentence = mongo.db.sentences.find_one({'_id': ObjectId(sentence_id)})
  print(sentence)
  return jsonify({"tokenized_sentence": sentence['tokenized']})
  
@app.route('/word/<string:word_id>/')
def word_show(word_id):
  word = mongo.db.tokens.find_one({'_id': ObjectId(word_id)})
  return jsonify({"text": word['text']})

if __name__ == '__main__':
  jieba.initialize() 
  app.run(debug=True)
