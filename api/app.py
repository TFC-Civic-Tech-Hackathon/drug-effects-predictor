from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import csv
import io

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']  # Change 'mydatabase' to your database name
collection = db['Drug effects']    

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

# 
@app.route('/upload', methods=['POST'])
def upload_csv():
    # Check if files are provided in the request
    if 'medicine_dataset' not in request.files or 'patient_records' not in request.files:
        return jsonify({'error': 'CSV files not provided'})

    # Get drug file and patient file from the request
    drug_file = request.files['medicine_dataset']
    patient_file = request.files['patient_records']

    # Read only the first 50 drug rows
    drug_data = list(csv.DictReader(io.StringIO(drug_file.read().decode('utf-8'))))[:50]

    # Reset file pointer for patient file
    patient_file.seek(0)

    # Read patient records CSV file and create "Drug effects" table
    patient_data = csv.DictReader(io.StringIO(patient_file.read().decode('utf-8')))
    for patient_row in patient_data:
        # Extract relevant data from patient records
        patient_id = patient_row['Patient ID']
        
        # Assign side effects of the first 50 drugs to this patient
        for drug_row in drug_data:
            side_effect = drug_row.get('sideEffect0', None)
            # Create "Drug effects" table
            drug_effect = {
                'drugId': drug_row['id'],
                'PatientId': patient_id,
                'side_effect': side_effect
            }
            db["Drug_effects"].insert_one(drug_effect)

    return jsonify({'success': 'Data uploaded successfully'})


if __name__ == '__main__':
    app.run(debug=True)