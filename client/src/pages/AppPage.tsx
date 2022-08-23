import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FeedComponent from '../components/Feed/FeedComponent'

const AppPage: FC = () => {
    return (
        <Container className='container-full-height mt-5'>
            <Row className='h-100'>
                <Col className='d-flex flex-column gap-4' xs={9}>
                    <FeedComponent />
                </Col>
                <Col className='border-left'>2</Col>
            </Row>
        </Container>
    )
}

export default AppPage
