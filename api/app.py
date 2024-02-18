from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']  # Change 'mydatabase' to your database name
collection = db['users']    # Change 'users' to your collection name

@app.route('/signup', methods=['POST'])
def signup():
    print("inside")
    print(request)
    data = request.json
    email = data.get('email')
    password = data.get('password')
    # Insert the data into MongoDB
    print(f"{email} {password}")
    collection.insert_one({'email': email, 'password': password})
    return jsonify({'message': 'User signed up successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
