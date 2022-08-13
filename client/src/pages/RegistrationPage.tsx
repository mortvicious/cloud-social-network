import React, { FC, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import AuthAPI from '../api/AuthAPI'
import { IUserRegister } from '../models/User/User.types'
import { Validator } from '../helpers/Validator'

const RegistrationPage: FC = () => {
	const [isLoading, setLoading] = useState<boolean>(false)
	const [user, setUser] = useState<IUserRegister>({
		email: '',
		password: '',
		repeatPassword: '',
		username: '',
		link: ''
	})
	const handleRegBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setLoading(true)
		await AuthAPI.register(user)
		setLoading(false)
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {value, id} = e.currentTarget
		if (id === 'formBasicEmail') setUser({ ...user, email: value })
		console.log(Validator.email(user.email))
		if (id === 'formBasicPassword') setUser({ ...user, password: value })
		if (id === 'formBasicRepeatPassword') setUser({ ...user, repeatPassword: value })
		if (id === 'formBasicUsername') setUser({ ...user, username: value})
		if (id === 'formBasicLink') setUser({ ...user, link: value})
	}
	return (
		<div className='container p-3 px-5 d-flex flex-column justify-content-center'>
			<div className='w-100 d-flex justify-content-center mt-1'>
				<Card className='p-5 w-50 d-flex '>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label className='text-primary'>
								<strong>Email</strong>
							</Form.Label>
							<Form.Control onChange={handleChange} type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label className='text-primary'>
								<strong>Password</strong>
							</Form.Label>
							<Form.Control onChange={handleChange} type='password' placeholder='Enter password' />
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicRepeatPassword'>
							<Form.Label className='text-primary'>
								<strong>Repeat password</strong>
							</Form.Label>
							<Form.Control onChange={handleChange} type='password' placeholder='Repeat password' />
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicUsername'>
							<Form.Label className='text-primary'>
								<strong>Username</strong>
							</Form.Label>
							<Form.Control onChange={handleChange} type='username' placeholder='Enter username' />
							<Form.Text className='text-muted'>
								Other users will see your username.
							</Form.Text>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicLink'>
							<Form.Label className='text-primary'>
								<strong>Unique page link</strong>
							</Form.Label>
							<Form.Control onChange={handleChange} type='text' placeholder='Enter unique page link' />
						</Form.Group>

						<div className='d-flex align-items-center gap-4'>
							<Button onClick={handleRegBtn} variant='primary' type='submit'>
								Register
							</Button>
							<NavLink to='/' className='text-decoration-underline pointer'>
								Already registered? Back to login page
							</NavLink>
						</div>
					</Form>
				</Card>
			</div>
		</div>
	)
}

export default RegistrationPage
