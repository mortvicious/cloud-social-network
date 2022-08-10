import React, { FC, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../components/Post/Post'
import { PostModel } from '../models/Post/PostModel'
import { IPostModel } from '../models/Post/Post.types'




const AppPage: FC = () => {
	const [posts, setPosts] = useState<PostModel[]>([])

	useEffect(() => {
		//fetch posts pagination
		//set posts
	}, [])

	const post1: IPostModel = {
		author: { username: 'Antonio Margaretti', id: '123', avatar: '', link: 'fgfg' },
		content: 'I am Antonio Margaretti!',
		likes: [],
		comments: [],
		date: '1 hour ago',
		id: '234',
		link: 'post234'
	} //mock, will be deleted after server setup

	return (
		<Container className='container-full-height mt-5'>
			<Row className='h-100'>
				<Col xs={9}>
					{posts.map(post => <Post key={post.id} post={PostModel.init(post)} />)}
					<Post post={PostModel.init(post1) /* mock, will be deleted after server setup */} /> 
				</Col>
				<Col className='border-left'>2</Col>
			</Row>
		</Container>
	)
}

export default AppPage
