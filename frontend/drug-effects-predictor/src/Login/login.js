import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    alert('Login submitted');
  };
  return (
    <Container className="justify-content-center align-items-center custom-flex-width" style={{ minHeight: "100vh", width:"30vw", marginTop:"10%", marginBottom:"10%" }}>
      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
                <Form.Group id="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Button className="w-100 mb-3" type="submit">Log In</Button>
                <div className="text-center mb-3">
                  <span>Don't have an account?  </span>
                  <Link to="/signup">Signup</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default login