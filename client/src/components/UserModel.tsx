import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
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
		<Container>
			<NavLink
				className='d-flex gap-3 text-primary text-decoration-none align-items-center username'
				to={link}
			>
				{/* <img className='rounded' src={avatar} alt="" /> */}
				<i className='bi bi-person border rounded mock-avatar'></i>
				<strong>{username}</strong>
			</NavLink>
		</Container>
	) : (
		<Container>
			<NavLink
				className='d-flex gap-3 text-primary text-decoration-none align-items-center username'
				to={link}
			>
				{/* <img className='rounded' src={avatar} alt="" /> */}
				<i className='bi bi-person border rounded mock-avatar'></i>
                    <div className='d-flex flex-column gap-0'>
                        <strong>{username}</strong>
                        <span className="text-muted post-date">{ date }</span>
                    </div>
			</NavLink>
		</Container>
	)
}

export default UserModel
