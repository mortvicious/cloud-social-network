import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './router/Routing'
import user from './store/User/User'
import AuthAPI from './api/AuthAPI'
import Spinner from 'react-bootstrap/Spinner'

function App() {
	const [isLoading, setLoading] = useState<boolean>(true)
	const handleLoading = () => {
		setLoading(false)
	}
	
	useEffect(() => {
		window.addEventListener('load', handleLoading)
		AuthAPI.Authenticate()
		
		return () => window.removeEventListener('load', handleLoading)
	}, [])
	
	return !isLoading? (
		<div className='app bg-light'>
			<Routing />
		</div>
	) : (
		<div className='app bg-light justify-content-center d-flex align-items-center'>
			<Spinner variant='primary' animation='border' role='status' />
		</div>
	)
}

export default App
