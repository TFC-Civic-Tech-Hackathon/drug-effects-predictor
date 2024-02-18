import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'; // Import your custom CSS file for additional styling

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    alert('Login submitted');
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
          <Card className="custom-card">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Log In
                </Button>

                <div className="text-center mb-3">
                  <span className="mr-2">Don't have an account?    </span>
                  <Link to="/signup">Signup</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;