import React from 'react'
import { useState } from 'react';
import {Button,Modal,Row,Col,Container,Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function LandingPage() {
    const [show, setShow] = useState(true);
    function handleShow() {
        
        setShow(true);
      }
  return (
    <div>
        {/* <Button onClick={handleShow}>Show MOdal</Button> */}
    <Modal show={show} fullscreen={true} >
        
        <Modal.Body style={{ 
        backgroundImage: `url('https://i0.wp.com/onefortheroadphoto.com/wp-content/uploads/2020/11/Featured-Blog-Image-1920x800px-50-Exploring-the-Upper-Colorado-River.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center' }}>
            <div style={{textAlign:"center",position:"relative",top:"80px"}}>
               <h1 style={{fontFamily: "'Meie Script', cursive"}}><i><b> PharmaCutieCal</b></i></h1>
            </div>

            <Container>
                <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                </Row>

            </Container>
            <Link style={{position:"relative", top:"80vh",left:"46vw"}} className="w-100" to="/login">
                <Button>Click Here!</Button>
            </Link>
        </Modal.Body>
      </Modal>
      </div>
  )
}

export default LandingPage