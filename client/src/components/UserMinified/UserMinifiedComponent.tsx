import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IUserMinifiedModel } from '../../models/User/User.types'

const UserMinifiedComponent: FC<IUserMinifiedModel> = ({
	avatar,
	username,
	link,
	id,
	date,
}) => {
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

export default UserMinifiedComponent
