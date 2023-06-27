import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col, Card} from 'react-bootstrap'
import '../Style/signup.scss'

const Signup = () => {
  return (
    <Container fluid>
        <Row>
            <Col sm={{offset:1, span:10}} md={{offset:3, span:6}} lg={{offset:4, span:4}}>
                <Card className=' mt-5 mt-md-3 p-3 signup-card-shadow'>
                <Form>
                <Form.Group className="mb-3" controlId="name"> {/* Groups two elements together */}
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" /> {/* similar to input tag */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="userid"> {/* Groups two elements together */}
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter user id" /> {/* similar to input tag */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail"> {/* Groups two elements together */}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" /> {/* similar to input tag */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="outline-primary" type="submit">
                    Sign Up
                </Button>
                </Form>
                </Card>
            </Col>
        </Row>
        
    </Container>
   
  )
}

export default Signup