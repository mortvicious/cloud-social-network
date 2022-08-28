import React, { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

// API
import AuthAPI from '../api/AuthAPI'

// Helpers
import { Validator } from '../helpers/Validator'
import { ErrorHandler } from '../helpers/ErrorHandler'

// Store
import userAuthStore from '../store/User/UserAuth'

// Components
import Form 		from 'react-bootstrap/Form'
import Button 	from 'react-bootstrap/Button'
import Card 		from 'react-bootstrap/Card'
import Spinner 	from 'react-bootstrap/Spinner'

const RegistrationPage: FC = observer(() => {

	const [isLoading, setLoading] = useState<boolean>(false)
	const [errors, setErrors] 		= useState<string[]>([])
	const [isSuccess, setSuccess] = useState<boolean>(false)

	const handleRegBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setRegistrationVisualProcessingStates()

		const result: boolean = Validator.ValidateAll(
			userAuthStore.getUserToValidate()
		)

		setErrors(ErrorHandler.GetErrors())

		if (result) {

			const { status, data } = await AuthAPI.Register<{ message: string }>(
				userAuthStore.getUserToRegistration()
			)

			status === 200
				? setSuccess(true)
				: setErrors([data.message])

		}

		setLoading(false)

	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, id } = e.currentTarget
		userAuthStore.setUserParams(id, value)
	}

	const setRegistrationVisualProcessingStates = () => {
		setSuccess(false)
		setLoading(true)
	}

	useEffect(() => { }, [errors])

	return (
		<div className="container p-3 px-5 d-flex flex-column justify-content-center">
			<div className="w-100 d-flex justify-content-center mt-1">
				<Card className="p-5 w-50 d-flex">
					<div className="d-flex flex-column justify-content-center align-items-center gap-0 pb-4 pt-0">
						{errors?.map((error: string) => (
							<p key={error} className="text-danger m-0 p-0">
								{error}
							</p>
						))}
						{isLoading ? (
							<Spinner variant="primary" animation="border" role="status" />
						) : null}
						{isSuccess ? (
							<p className="text-success m-0 p-0">User successfully created</p>
						) : null}
					</div>

					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-primary">
								<strong>Email</strong>
							</Form.Label>
							<Form.Control
								onChange={handleChange}
								type="email"
								placeholder="Enter email"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label className="text-primary">
								<strong>Password</strong>
							</Form.Label>
							<Form.Control
								onChange={handleChange}
								type="password"
								placeholder="Enter password"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicRepeatPassword">
							<Form.Label className="text-primary">
								<strong>Repeat password</strong>
							</Form.Label>
							<Form.Control
								onChange={handleChange}
								type="password"
								placeholder="Repeat password"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicUsername">
							<Form.Label className="text-primary">
								<strong>Username</strong>
							</Form.Label>
							<Form.Control
								onChange={handleChange}
								type="username"
								placeholder="Enter username"
							/>
							<Form.Text className="text-muted">
								Other users will see your username.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicLink">
							<Form.Label className="text-primary">
								<strong>Unique page link</strong>
							</Form.Label>
							<Form.Control
								onChange={handleChange}
								type="text"
								placeholder="Enter unique page link"
							/>
						</Form.Group>

						<div className="d-flex align-items-center gap-4">
							<Button onClick={handleRegBtn} variant="primary" type="submit">
								Register
							</Button>
							<NavLink to="/" className="text-decoration-underline pointer">
								Already registered? Back to login page
							</NavLink>
						</div>
					</Form>
				</Card>
			</div>
		</div>
	)
})

export default RegistrationPage
