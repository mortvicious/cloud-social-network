import React, { FC } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Logo from '../components/Logo'

const RegistrationPage: FC = () => {
	return (
		<div className='container p-3 px-5 d-flex flex-column justify-content-center'>
			<Logo />
			<div className='w-100 d-flex justify-content-center mt-1'>
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

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label className='text-primary'>
								<strong>Repeat password</strong>
							</Form.Label>
							<Form.Control type='password' placeholder='Repeat password' />
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicUsername'>
							<Form.Label className='text-primary'>
								<strong>Username</strong>
							</Form.Label>
							<Form.Control type='username' placeholder='Enter username' />
							<Form.Text className='text-muted'>
								Other users will see your username.
							</Form.Text>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicLink'>
							<Form.Label className='text-primary'>
								<strong>Unique page link</strong>
							</Form.Label>
							<Form.Control type='text' placeholder='Enter unique page link' />
						</Form.Group>

						<div className='d-flex align-items-center gap-4'>
							<Button variant='primary' type='submit'>
								Register
							</Button>
							<a href='/' className='text-decoration-underline pointer'>
								Already registered? Back to login page
							</a>
						</div>
					</Form>
				</Card>
			</div>
		</div>
	)
}

export default RegistrationPage
