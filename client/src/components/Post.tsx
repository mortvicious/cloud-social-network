import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
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
			<UserModel
				link={user.link}
				avatar={user.avatar}
				id={user.id}
				key={user.id}
				username={user.username}
			/>
			<p>{content}</p>
		</Card>
	)
}

export default Post
