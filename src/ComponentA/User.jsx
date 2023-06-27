import React from 'react'
import '../Style/user.css'
import {Card, Button, Col} from 'react-bootstrap'

const User = ({data:{firstName, lastName, title, picture}}) => {
    //const {data:{firstName, lastName, title, picture}} = props
  return (
    <Col xs={{span:10,offset:1}} sm={{span:6,offset:0}} md={5} lg={4} xl={3} >
      <Card className='container-card'>
        <Card.Body className='card-body'>
          <img src={picture} alt="" height="100px" width="100px"/>
          <div className='textButton'>
            <span>{`${firstName} ${lastName}`}</span>
            <Button variant="outline-primary">Add Friend</Button>
          </div>
        </Card.Body>
      </Card> 
    </Col>
  )
}

export default User