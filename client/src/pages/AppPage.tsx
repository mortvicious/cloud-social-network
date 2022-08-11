import React, { FC, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../components/Post/Post'
import { PostModel } from '../models/Post/PostModel'
import { IPostModel } from '../models/Post/Post.types'
import FeedCreatePostForm from '../components/Feed/FeedCreatePostForm'

const AppPage: FC = () => {
	const [posts, setPosts] = useState<IPostModel[]>([])

	const mockPosts: IPostModel[] = [
		//mock, will be deleted after server setup
		{
			author: {
				username: 'Antonio Margaretti',
				id: '123',
				avatar: '',
				link: 'fgfg',
			},
			content: 'I am Antonio Margaretti!',
			likes: [],
			comments: [],
			shares: [],
			date: '1 hour ago',
			id: '234',
			link: 'post234',
		},
		{
			author: {
				username: 'Archibaldo Buribaldo',
				id: '54245',
				avatar: '',
				link: 'fgfgdfgdfg',
			},
			content: 'Yo guyz',
			likes: [],
			comments: [],
			shares: [],
			date: '1 hour ago',
			id: '15345',
			link: 'post234sdfg',
		},
	]

	// setPosts(mockPosts)

	useEffect(() => {
		//fetch posts pagination
		//set posts
		setPosts(mockPosts) //mock, will be deleted after server setup
	}, [])

	return (
		<Container className='container-full-height mt-5'>
			<Row className='h-100'>
				<Col className='d-flex flex-column gap-4' xs={9}>
					<FeedCreatePostForm />
					{posts.map((post) => (
						<Post key={post.id} post={PostModel.init(post)} />
					))}
				</Col>
				<Col className='border-left'>2</Col>
			</Row>
		</Container>
	)
}

export default AppPage
