import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AppPage: FC = () => {
  return (
    <Container className='container-full-height'>
      <Row className='h-100'>
        <Col xs={10}>1</Col>
        <Col className='border-left'>2</Col>
      </Row>
    </Container>
  )
}

export default AppPage