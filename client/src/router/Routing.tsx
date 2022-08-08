import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import user from '../store/User/User'
import { observer } from 'mobx-react-lite'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import AppPage from '../pages/AppPage'
import CommunitiesPage from '../pages/CommunitiesPage'
import MessengerPage from '../pages/MessengerPage'
import SettingsPage from '../pages/SettingsPage'
import SearchPage from '../pages/SearchPage'
import FriendsPage from '../pages/FriendsPage'
import ClientUserPage from '../pages/UserPage'
import IDUserPage from '../pages/IDUserPage'
import IDCommunityPage from '../pages/IDCommunityPage'
import RouterHelper from './RouterHelper'

const Routing = observer(() => {
	return user.isAuth ? (
		<Router>
			<RouterHelper authorized={true} />
			<Routes>
				<Route path='/' element={<AppPage />} />
				<Route path='/friends' element={<FriendsPage />} />
				<Route path='/communities' element={<CommunitiesPage />} />
				<Route path='/messenger' element={<MessengerPage />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/user' element={<ClientUserPage />} />
				<Route path='/user:id' element={<IDUserPage />} />
				<Route path='/community:id' element={<IDCommunityPage />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	) : (
		<Router>
			<RouterHelper authorized={false} />
			<Routes>
				<Route path={'/'} element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/user:id' element={<IDUserPage />} />
				<Route path='/community:id' element={<IDCommunityPage />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	)
})

export default Routing
