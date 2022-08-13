import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './router/Routing'
import user from './store/User/User'

function App() {
	useEffect(() => {
		// user.setAuth(true) //debug
	}, [])
	return (
		<div className='app bg-light'>
			<Routing />
		</div>
	)
}

export default App
