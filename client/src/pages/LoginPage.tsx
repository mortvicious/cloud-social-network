import React, { FC } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import user from '../store/User/User'
import { observer } from 'mobx-react-lite'

const LoginPage: FC = () => {
	const handleLoginBtn = () => {
		user.setAuth(true)
		console.log(user.isAuth)
	}
	return (
		<div className='container p-3 px-5 d-flex flex-column '>
			<div className='w-100 d-flex flex-column justify-content-center align-items-center mt-5'>
				<Card className='p-5 w-50 d-flex '>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label className='text-primary'>
								<strong>Email</strong>
							</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label className='text-primary'>
								<strong>Password</strong>
							</Form.Label>
							<Form.Control type='password' placeholder='Enter password' />
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
}

export default LoginPage