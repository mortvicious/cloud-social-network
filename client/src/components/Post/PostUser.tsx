import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IPostUserModel as IPostUser } from '../../models/Post/Post.types'

const PostUser: FC<IPostUser> = ({ avatar, username, link, id, date }) => {
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

export default PostUser
