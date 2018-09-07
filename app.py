from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
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
  token_return = []
  for token_text in jieba.cut(request.form['sentence']):
    token = mongo.db.tokens.find_one({'text': token_text})
    if token is None:
      token_id = mongo.db.tokens.insert_one({'text': token_text}).inserted_id
    else:
      token_id = token['_id']
    token_return.append({"text": token_text, "id": str(token_id)})
  return jsonify(token_return)

if __name__ == '__main__':
  jieba.initialize() 
  app.run(debug=True)
