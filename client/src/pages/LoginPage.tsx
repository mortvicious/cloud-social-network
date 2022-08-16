import React, { FC, useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import user from '../store/User/User'
import AuthAPI from '../api/AuthAPI'
import userAuthStore from '../store/User/UserAuth'
import { observer } from 'mobx-react-lite'
import Spinner from 'react-bootstrap/Spinner'

const LoginPage: FC = observer(() => {
	const [errors, setErrors] = useState<string[]>([])

	const [isLoading, setLoading] = useState<boolean>(false)

	const handleLoginBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setLoading(true)
		const response = await AuthAPI.login(userAuthStore.getUserToLogin())
		response.status !== 200 ? setErrors([response]) : setErrors([])
		setLoading(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, id } = e.currentTarget
		userAuthStore.setUserParams(id, value)
	}

	useEffect(() => {}, [errors])

	return (
		<div className='container p-3 px-5 d-flex flex-column'>
			<div className='w-100 d-flex flex-column justify-content-center align-items-center mt-5'>
				<Card className='p-5 w-50 d-flex '>
					<div className='d-flex align-items-center flex-column gap-0 pb-4 pt-0'>
						{errors.map((error) => (
							<p key={error} className='text-danger m-0 p-0'>
								{error}
							</p>
						))}
						{isLoading ? (
							<Spinner variant='primary' animation='border' role='status' />
						) : null}
					</div>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label className='text-primary'>
								<strong>Email</strong>
							</Form.Label>
							<Form.Control
								onChange={handleChange}
								type='email'
								placeholder='Enter email'
							/>
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label className='text-primary'>
								<strong>Password</strong>
							</Form.Label>
							<Form.Control
								onChange={handleChange}
								type='password'
								placeholder='Enter password'
							/>
						</Form.Group>
						<div className='d-flex align-items-center gap-4'>
							<Button onClick={handleLoginBtn} variant='primary' type='button'>
								Login
							</Button>
							<NavLink
								to='/registration'
								className='text-decoration-underline pointer'
							>
								Don't have an account? Registration
							</NavLink>
						</div>
					</Form>
				</Card>
			</div>
		</div>
	)
})

export default LoginPage
