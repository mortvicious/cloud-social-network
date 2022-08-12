import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IUserCoreModel } from '../../models/User/User.types'

const UserCoreComponent: FC<IUserCoreModel> = ({
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

export default UserCoreComponent
