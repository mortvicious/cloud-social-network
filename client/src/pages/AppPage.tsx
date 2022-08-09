import React, { FC, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../components/Post/Post'
import { PostUserModel } from '../models/Post/PostUserModel'
import { PostModel } from '../models/Post/PostModel'
import { IPostModel } from '../models/Post/Post.types'

	/* <Post post={post1} /> */



const AppPage: FC = () => {
	const [posts, setPosts] = useState<PostModel[]>([])

	const initPost = (post: IPostModel) => {
		const { author, content, likes, comments, date, id, link } = post
		const newPost: IPostModel = new PostModel(
			new PostUserModel(author.username, author.id, author.avatar, author.link),
			content,
			likes,
			comments,
			date,
			id,
			link
		)
		return newPost
	}

	useEffect(() => {
		//fetch posts pagination
		//set posts
	}, [])

	return (
		<Container className='container-full-height mt-5'>
			<Row className='h-100'>
				<Col xs={9}>
					{posts.map(post => <Post key={post.id} post={initPost(post)}/>)}
				</Col>
				<Col className='border-left'>2</Col>
			</Row>
		</Container>
	)
}

export default AppPage
