import React, { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tables from './components/Tables'
import { Button, Col, Container, Row } from 'react-bootstrap'


function App() {

  return (
   <Container>
   <Header/>
   <Row className='justify-content-md-center'>
    <Col xs={6}>
   <AddTask/>
    </Col>
   </Row>
   <Row className='justify-content-md-center'>
    <Col xs={6}>
   <Tables/>
    </Col>
   </Row>

   </Container>

   
  )
}

export default App
