import React, { FC } from 'react'
import { Card, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostUser from './PostUser'
import PostFunctionBtn from './PostFunctionBtn'
import PostCommentForm from './PostCommentForm'
import { IPostModel } from '../../models/Post/Post.types'
import newCommentStore from '../../store/NewComment/NewComment'

interface IPost {
	post: IPostModel
}

const Post: FC<IPost> = ({ post }) => {
	const handleLikeBtn = () => {}
	const handleCommentBtn = () => {}
	const handleShareBtn = () => { }
	const author = post.author
	return (
		<Card className='p-3'>
			<Container className='d-flex flex-column gap-3 justify-content-between'>
				<Row className='align-items-center'>
					<Col className='container-fluid' xs={11}>
						<PostUser
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
				<PostCommentForm postID={post.id} />
			</Container>
		</Card>
		
	)
}

export default Post
