import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export interface IPostUserModel {
	avatar: string
	username: string
	link: string
	id: string
    date?: string
}

const PostUserModel: FC<IPostUserModel> = ({ avatar, username, link, id, date }) => {
	return (
			<NavLink
				className='d-flex gap-3 text-primary text-decoration-none align-items-center username'
				to={`user:${link}`}
			>
				<i className='bi bi-person border rounded mock-avatar'></i>
				<strong>{username}</strong>
			</NavLink>
	)
}

export default PostUserModel
