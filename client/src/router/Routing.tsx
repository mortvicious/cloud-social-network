import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import AppPage from '../pages/AppPage'
import user from '../store/User/User'

function Routing() {
	return user.isAuth ? (
		<Router>
			<Routes>
				<Route path='/' element={<AppPage />} />
				<Route path='/friends' element={<AppPage />} />{' '}
				<Route path='/communities' element={<AppPage />} />{' '}
				<Route path='/messenger' element={<AppPage />} />
				<Route path='/settings' element={<AppPage />} />
				<Route path='/search' element={<AppPage />} />
			</Routes>
		</Router>
	) : (
		<Router>
			<Routes>
				<Route path={'/'} element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
			</Routes>
		</Router>
	)
}


export default Routing
