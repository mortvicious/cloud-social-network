import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './router/Routing'
import user from './store/User/User'
import AuthAPI from './api/AuthAPI'

function App() {
	useEffect(() => {
		// user.setAuth(true) //debug
		AuthAPI.authenticate()
		console.log(user.username)
	}, [])
	return (
		<div className='app bg-light'>
			<Routing />
		</div>
	)
}

export default App
