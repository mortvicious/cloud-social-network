import React, { FC, useState, useEffect } from 'react'
import PostComponent from '../Post/PostComponent'
import { PostModel } from '../../models/Post/PostModel'
import { IPostModel } from '../../models/Post/Post.types'
import FeedCreatePostFormComponent from './FeedCreatePostFormComponent'
import { mockPosts } from '../../mock/mockPosts'

interface IFeedComponent {
	userID?: string
}

const FeedComponent: FC<IFeedComponent> = ({userID}) => {
	const [posts, setPosts] = useState<IPostModel[]>([])

	useEffect(() => {
		//---fetch posts pagination---
		//if user set posts from user
		//else set posts from friends/community
		setPosts(mockPosts)
	}, [])

	return (
		<React.Fragment>
			{userID ? null : <FeedCreatePostFormComponent />}
			{posts.map((post) => (
				<PostComponent key={post.id} post={PostModel.init(post)} />
			))}
		</React.Fragment>
	)
}

export default FeedComponent
