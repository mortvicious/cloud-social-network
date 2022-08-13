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
			state={{ id: id }}
		>
			{/* <i className='bi bi-person border rounded mock-avatar'></i> */}
			<div className='user-core-avatar'><img className='img-fluid' src='/avatars/5jfk5jgsk5nfsc3.jpg' alt='' /></div>
			<strong>{username}</strong>
		</NavLink>
	)
}

export default UserCoreComponent
