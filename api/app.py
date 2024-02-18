from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import csv
import io
import random

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']  # Change 'mydatabase' to your database name
collection = db['Drug effects']  
collection1 = db['drug_file']  

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

    # Remove tables before inserting
    
    # Check if files are provided in the request
    if 'medicine_dataset' not in request.files or 'patient_records' not in request.files or 'drug_effects' not in request.files:
        return jsonify({'error': 'CSV files not provided'})

    # Get drug file, patient file, and drug effects file from the request
    drug_file = request.files['medicine_dataset']
    patient_file = request.files['patient_records']
    drug_effects_file = request.files['drug_effects']

    # Read only the first 50 drug rows
    drug_data = list(csv.DictReader(io.StringIO(drug_file.read().decode('utf-8'))))[:50]

    # Reset file pointers for patient and drug effects files
    patient_file.seek(0)
    drug_effects_file.seek(0)

    # Read patient records CSV file
    patient_data = list(csv.DictReader(io.StringIO(patient_file.read().decode('utf-8'))))

    # Read drug effects CSV file
    drug_effects_data = list(csv.DictReader(io.StringIO(drug_effects_file.read().decode('utf-8'))))

    # Number of patients
    num_patients = len(patient_data)

    # Create Patients_record table and insert patient data
    patients_collection = db['Patients_record']
    for patient_row in patient_data:
        patients_collection.insert_one(patient_row)

    # Create "Drug effects" table and insert drug effects data
    drug_effects_collection = db['Drug_effects']
    for drug_effect_row in drug_effects_data:
        drug_effects_collection.insert_one(drug_effect_row)


    drug_file_collection = db['drug_file']
    for drug_file_row in drug_data:
        drug_file_collection.insert_one(drug_file_row)

    # Assign drugs to patients in a circular manner
    drug_index = 0
    for patient_row in patient_data:
        # Extract relevant data from patient records
        patient_id = patient_row['Patient ID']

        # Get the drug row for the current drug index
        drug_row = drug_data[drug_index]

        # Assign side effects of the drug to the patient
        side_effect = drug_row.get(f'sideEffect{random.randint(0, 4)}', None)

        # Create "Drug effects" table
        drug_effect = {
            'drugId': drug_row['id'],
            'PatientId': patient_id,
            'side_effect': side_effect
        }
        db["Drug_effects"].insert_one(drug_effect)

        # Move to the next drug index in a circular manner
        drug_index = (drug_index + 1) % len(drug_data)

    return jsonify({'success': 'Data uploaded successfully'})


@app.route('/search', methods=['GET'])
def search():
    print("inside-----------")
    term = request.args.get('term')
    print(term)

    # Perform a MongoDB query to find documents that match the search term
    results = list(collection1.find({'name': {'$regex': f'^{term}', '$options': 'i'}}))  # Using regex to perform a "startswith" search

    # print(results)
    # Extract only the 'name' field from the results
    names = [result['name'] for result in results]

    return jsonify({'results': names})

@app.route('/model', methods=['GET'])
def search1():
    print("inside model--------")
    term = request.args.get('selectedResult')
    print(term)

    #TODO

    return term


if __name__ == '__main__':
    app.run(debug=True)
