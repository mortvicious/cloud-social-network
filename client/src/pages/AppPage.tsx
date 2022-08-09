import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../components/Post/Post'
import { MockUserModel } from '../models/MockUserModel'

const AppPage: FC = () => {
	const user1 = new MockUserModel('John Cina', '12345', 'avatar', 'link')
	return (
		<Container className='container-full-height mt-5'>
			<Row className='h-100'>
				<Col xs={9}>
					<Post user={user1} content='Post here' />
				</Col>
				<Col className='border-left'>2</Col>
			</Row>
		</Container>
	)
}

export default AppPage
