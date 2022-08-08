import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export interface IUserModel {
	avatar: string
	username: string
	link: string
	id: string
    post?: boolean
    date?: string
}

const UserModel: FC<IUserModel> = ({ avatar, username, link, id, post, date }) => {
	return post === false ? (
			<NavLink
				className='d-flex gap-3 text-primary text-decoration-none align-items-center username'
				to={link}
			>
				<i className='bi bi-person border rounded mock-avatar'></i>
				<strong>{username}</strong>
			</NavLink>
	) : (
			<NavLink
				className='d-flex gap-3 text-primary text-decoration-none align-items-center username'
				to={link}
			>
				<i className='bi bi-person border rounded mock-avatar'></i>
                    <div className='d-flex flex-column gap-0'>
                        <strong>{username}</strong>
                        <span className="text-muted post-date">{ date }</span>
                    </div>
			</NavLink>
	)
}

export default UserModel
