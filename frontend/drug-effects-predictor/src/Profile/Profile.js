import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import NavbarCustom from '../Navbar/NavbarCustom'
function Profile() {
    const [selectedGenderOption, setSelectedGenderOption] = useState('');
    const [selectedBloodOption, setSelectedBloodOption] = useState('');
    const [selectedPregnantOption, setSelectedPregnantOption] = useState('');

    const handlePregnantRadioChange = (event) => {
        setSelectedPregnantOption(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        alert('Profile Updated');
      };
      const handleGenderSelectChange = (event) => {
        setSelectedGenderOption(event.target.value);
      };
      const handleBloodSelectChange = (event) => {
        setSelectedGenderOption(event.target.value);
      };
  return (
    <div>
    <NavbarCustom />
    <Container className="justify-content-center align-items-center custom-flex-width" style={{ minHeight: "100vh", width:"30vw", marginTop:"10%", marginBottom:"10%" }}>
      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required disabled/>
                </Form.Group>
                <Form.Group id="age" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group id="age" className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" required />
                </Form.Group>
                <Form.Group id="gender" className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" custom onChange={handleGenderSelectChange} value={selectedGenderOption}>
                    <option value="" disabled>Select an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                   
                    {/* Add more options as needed */}
                </Form.Control>
                </Form.Group>
                <Form.Group id="height" className="mb-3">
                  <Form.Label>Height (cms)</Form.Label>
                  <Form.Control type="number" required />
                </Form.Group>
                <Form.Group id="weight" className="mb-3">
                  <Form.Label>Weight (lbs)</Form.Label>
                  <Form.Control type="number" required />
                </Form.Group>
                <Form.Group id="blood" className="mb-3">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Control as="select" custom onChange={handleBloodSelectChange} value={selectedBloodOption}>
                    <option value="" disabled>Select an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                   
                    {/* Add more options as needed */}
                </Form.Control>
                </Form.Group>
                <Form.Group id="pregnant" className="mb-3">
                  <Form.Label>Pregnant?</Form.Label>
                  <Form.Group>
                    
                    <Form.Check
                        type="radio"
                        label="Yes"
                        value="yes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onChange={handlePregnantRadioChange}
                        checked={selectedPregnantOption === 'yes'}
                    />
                    <Form.Check
                        type="radio"
                        label="No"
                        value="no"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onChange={handlePregnantRadioChange}
                        checked={selectedPregnantOption === 'no'}
                    />
                    
                    {/* Add more radio buttons as needed */}
                    </Form.Group>
                </Form.Group>
                <Form.Group id="pastcomplication" className="mb-3">
                  <Form.Label>List your Past Complication, if any:</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Button className="w-100" type="submit">Submit</Button>
                
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Profile