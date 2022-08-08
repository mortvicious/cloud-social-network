import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export interface IUserModel {
	avatar: string
	username: string
	link: string
	id: string
}

const UserModel: FC<IUserModel> = ({avatar, username, link, id}) => {
    return (
			<Container className='d-flex gap-1'>
				<NavLink
					className='d-flex text-primary text-decoration-none align-items-center'
					to={link}
				>
					{/* <img className='rounded' src={avatar} alt="" /> */}
					<i className='bi bi-person border rounded mock-avatar'></i>
					<strong>{username}</strong>
				</NavLink>
			</Container>
		)
}

export default UserModel
