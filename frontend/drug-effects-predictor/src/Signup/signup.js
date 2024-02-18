import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      console.log("before")
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
     
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();


      if (data && data.error) {

        alert(data.error);
      } else {
   
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Display a generic error message
      alert('An error occurred. Please try again later.');
    }
  };



  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", minwidth: "70vw" }}>
      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Signup</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email} // Bind value to email state variable
                    onChange={(e) => setEmail(e.target.value)} // Update email state variable
                    required
                  />
                </Form.Group>
                <Form.Group id="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password} // Bind value to password state variable
                    onChange={(e) => setPassword(e.target.value)} // Update password state variable
                    required
                  />
                </Form.Group>
                <Form.Group id="cnfpassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword} // Bind value to confirmPassword state variable
                    onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state variable
                    required
                  />
                </Form.Group>
                <Button className="w-100" type="submit">Sign Up</Button>
                <Link className="w-100" to="/login">Log In</Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
