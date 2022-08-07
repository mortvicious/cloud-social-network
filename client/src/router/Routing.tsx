import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import AppPage from '../pages/AppPage'
import user from '../store/User/User'
import Navigation from '../components/Navigation'
import CommunitiesPage from '../pages/CommunitiesPage'
import MessengerPage from '../pages/MessengerPage'
import SettingsPage from '../pages/SettingsPage'
import SearchPage from '../pages/SearchPage'
import FriendsPage from '../pages/FriendsPage'
import ClientUserPage from '../pages/ClientUserPage'
import IDUserPage from '../pages/IDUserPage'

function Routing() {
	return user.isAuth ? (
		<Router>
			<Navigation />
			<Routes>
				<Route path='/' element={<AppPage />} />
				<Route path='/friends' element={<FriendsPage />} />
				<Route path='/communities' element={<CommunitiesPage />} />
				<Route path='/messenger' element={<MessengerPage />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/user' element={<ClientUserPage />} />
				<Route path='/user:id' element={<IDUserPage />} />
			</Routes>
		</Router>
	) : (
		<Router>
			<Routes>
				<Route path={'/'} element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/user:id' element={<IDUserPage />} />
			</Routes>
		</Router>
	)
}


export default Routing
