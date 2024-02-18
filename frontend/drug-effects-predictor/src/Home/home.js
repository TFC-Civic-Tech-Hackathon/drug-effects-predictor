import React from 'react'
import { Container, Row, Col, Form, Button, Card,Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
function home() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        alert('Search Submitted');
      };
      const handleLogout = () => {
        // Here you would handle the actual logout process, like clearing the user session
        alert('Logging out...');
      };
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/home">
            <Navbar.Brand>PharmaCutieCal</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
                <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/myprofile">
                <Nav.Link >Profile</Nav.Link>
            </LinkContainer>
            {/* Add more navigation links as needed */}
          </Nav>
          <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="justify-content-center align-items-center custom-flex-width" style={{ minHeight: "100vh", width:"70vw", marginTop:"10%", marginBottom:"10%" }}>
      <Form onSubmit={handleSubmit}>
      <Row>
        <h2 className="text-center mb-4">Home</h2>
        <Col md={8}>
        
        <Form.Group id="email" className="mb-3">
            <Form.Control placeholder="Search Your Drug/Vaccine" type="text" required />
        </Form.Group> 
        </Col>
        <Col md={4}>
        <Button className="w-100" type="submit">Search</Button>
        </Col>
        
      </Row>
      </Form>
    </Container>
    </div>
  )
}

export default home