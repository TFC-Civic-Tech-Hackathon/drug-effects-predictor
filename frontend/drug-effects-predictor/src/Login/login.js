import React from 'react'
import { Container, Row, Col, Form, Button, Card,Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        alert('Login submitted');
      };
      
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/">
            <Navbar.Brand>PharmaCutieCal</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            {/* Add more navigation links as needed */}
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
                <Button className="w-100" type="submit">Log In</Button>
                <div style={{textAlign:"center"}}>
                <Link  className="w-100" to="/signup">Signup</Link>
                {/* <Link style={{float:"right"}} className="w-100" to="/">About Us</Link> */}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default login