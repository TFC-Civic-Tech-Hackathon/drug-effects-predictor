import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        alert('Signup submitted');
      };
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", minwidth:"70vw" }}>
      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Signup</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
                <Form.Group id="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Form.Group id="cnfpassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" required />
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

export default signup