import React, { FC } from 'react'
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserCoreComponent from '../User/UserCoreComponent'
import PostFunctionBtnComponent from './PostFunctionBtnComponent'
import PostCommentFormComponent from './PostCommentFormComponent'
import { IPostModel } from '../../models/Post/Post.types'

interface IPostComponent {
	post: IPostModel
}

const PostComponent: FC<IPostComponent> = ({ post }) => {
	const handleLikeBtn = () => {}
	const handleCommentBtn = () => {}
	const handleShareBtn = () => {}
	const author = post.author
	return (
		<Card className='p-3'>
			<Container className='d-flex flex-column gap-3 justify-content-between'>
				<Row className='align-items-center'>
					<Col className='container-fluid' xs={11}>
						<UserCoreComponent
							link={author.link}
							avatar={author.avatar}
							id={author.id}
							key={author.id}
							username={author.username}
							date={'2 hours ago'}
						/>
					</Col>
					<Col>
						<i className='bi bi-three-dots more-dots'></i>
					</Col>
				</Row>
				<p>{post.content}</p>
			</Container>
			<Container className='d-flex gap-5 mt-3'>
				<PostFunctionBtnComponent
					onClick={handleLikeBtn}
					icon='bi bi-hand-thumbs-up'
					content='Like'
					title={`${post.likes.length} likes`}
				/>
				<PostFunctionBtnComponent
					onClick={handleCommentBtn}
					icon='bi bi-chat-left'
					content='Comment'
					title={`${post.comments.length} comments`}
				/>
				<PostFunctionBtnComponent
					onClick={handleShareBtn}
					icon='bi bi-arrow-return-right'
					content='Share'
					title={`${post.shares.length} shares`}
				/>
			</Container>
			<Container>
				<PostCommentFormComponent postID={post.id} />
			</Container>
		</Card>
	)
}

export default PostComponent
