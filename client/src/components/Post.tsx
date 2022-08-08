import React, { FC } from 'react'
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserModel, { IUserModel } from './UserModel'
import { MockUser } from '../models/MockUser'

interface IPost {
	content: string
	user: IUserModel
	likes?: []
	comments?: []
	date?: string
	link?: string
}

const Post: FC<IPost> = ({ content, user, likes, comments, date, link }) => {
	return (
		<Card className='p-3'>
			<Container className='d-flex flex-column gap-3'>
				<Row className='align-items-center'>
					<Col xs={11}>
						<UserModel
							link={user.link}
							avatar={user.avatar}
							id={user.id}
							key={user.id}
							username={user.username}
							post={true}
							date={'2 hours ago'}
						/>
					</Col>
					<Col>
						<i className='bi bi-three-dots more-dots'></i>
					</Col>
				</Row>
				<Container>
					<p>{content}</p>
				</Container>
			</Container>
		</Card>
	)
}

export default Post
