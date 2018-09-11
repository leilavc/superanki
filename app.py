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

@app.route('/word/<string:word_id>/')
def words_show(word_id):
  word = mongo.db.tokens.find_one({'_id': ObjectId(word_id)})
  return jsonify({"text": word['text']})

if __name__ == '__main__':
  jieba.initialize() 
  app.run(debug=True)
