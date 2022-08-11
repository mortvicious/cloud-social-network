import React, { FC, useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import PostComponent from '../Post/PostComponent'
import { PostModel } from '../../models/Post/PostModel'
import { IPostModel } from '../../models/Post/Post.types'
import FeedCreatePostFormComponent from './FeedCreatePostFormComponent'
import { mockPosts } from '../../mock/mockPosts'

const FeedComponent: FC = () => {
	const [posts, setPosts] = useState<IPostModel[]>([])

	useEffect(() => {
		//fetch posts pagination
		//set posts
		setPosts(mockPosts)
	}, [])

	return (
		<React.Fragment>
			<FeedCreatePostFormComponent />
			{posts.map((post) => (
				<PostComponent key={post.id} post={PostModel.init(post)} />
			))}
		</React.Fragment>
	)
}

export default FeedComponent
