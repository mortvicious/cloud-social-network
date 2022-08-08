import React, { FC } from 'react'
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostUserModel, { IPostUserModel } from './PostUserModel'
import PostFunctionBtn from './PostFunctionBtn'
import PostCommentInput from './PostCommentInput'

interface IPost {
	content: string
	user: IPostUserModel
	likes?: []
	comments?: []
	date?: string
	link?: string
}

const Post: FC<IPost> = ({ content, user, likes, comments, date, link }) => {
	const handleLikeBtn = () => {}
	const handleCommentBtn = () => {}
	const handleShareBtn = () => {}
	return (
		<Card className='p-3'>
			<Container className='d-flex flex-column gap-3'>
				<Row className='align-items-center'>
					<Col xs={11}>
						<PostUserModel
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
				<p>{content}</p>
			</Container>
			<Container className='d-flex gap-5'>
				<PostFunctionBtn
					onClick={handleLikeBtn}
					icon='bi bi-hand-thumbs-up'
					content='Like'
				/>
				<PostFunctionBtn
					onClick={handleCommentBtn}
					icon='bi bi-chat-left'
					content='Comment'
				/>
				<PostFunctionBtn
					onClick={handleShareBtn}
                    icon='bi bi-arrow-return-right'
                    content='Share'
				/>
            </Container>
            <Container>
                <PostCommentInput/>
            </Container>
		</Card>
	)
}

export default Post
