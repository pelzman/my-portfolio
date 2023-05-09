import React from 'react'
import {Row, Col, Button, ListGroup, Form} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Contact() {
     function handleSubmit(){
    

    }
  return ( 
    <motion.div className='contact'
    initial={{scaleY:0}}
    animate={{scaleY:1}}
    exit={{scaleY:0}}
    transition={{
      duration:0.6
    }}
    >
  <h2 className="contact-head">Contact</h2>
  <Row  className="row" style={{display:'flex', flexDirection: 'column'}}>
    <Col>
    <div className="contact-form">
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  required  />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email"   required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Message</Form.Label>
        <Form.Control as ='textarea' placeholder="Message" />
      </Form.Group>
      <Button className="form-btn"variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </Col>
    <Col className='mt-md-5'>
    <div className="contact-text">
     <p className='text' style-md={{fontSize:20}}>If you want to chat about a project, kindly  email me on  <font>oluwapelumiadeyemo72@gmail.com</font></p>
      <p className='text'>I can help designing a scalable and responsive website, designing a new product , 
        or improving on the existing part of your product</p>
        <p className='text'>I'm very much available for remote-friendly work.</p>
        <div className="item">
          
          <a href="https://github.com/pelzman">
            <Button className='link-btn'>Github</Button> </a>
          <a href='https://twitter.com/_pelzman'>
          <Button className='link-btn'>Twitter </Button>
            </a> 
            <a  href='https://www.linkedin.com/in/oluwapelumi-adeyemo'>
            <Button className='link-btn'> LinkedIn </Button>
              </a> 
           <a href="https://www.facebook.com/abiola.oluwapelumi.370">
           <Button className='link-btn'>Facebook </Button>
           </a>
                           
          
       </div>
    </div>
    </Col>
  </Row>

    </motion.div>
  )
}
