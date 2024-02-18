import React from 'react'
import { Container, Row, Col, Form, Button, Card,Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your custom CSS file for additional styling

function Login() {
  const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        alert('Login submitted');
        navigate('/home');
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
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required />
                </Form.Group>


                <Button className="w-100 mb-3" type="submit">Log In</Button>
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
    </div>
  )
}

export default Login;