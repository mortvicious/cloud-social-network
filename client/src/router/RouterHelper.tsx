import React, { FC } from 'react'
import Logo from '../components/LogoComponent'
import NavigationUnauthorizedComponent from '../components/Navigation/NavigationUnauthorizedComponent'
import NavigationComponent from '../components/Navigation/NavigationComponent'
import { useLocation } from 'react-router'

interface IRouterHelper {
	authorized: boolean
}

const RouterHelper: FC<IRouterHelper> = ({ authorized }) => {
	const location = useLocation()
	return authorized ? (
		<NavigationComponent />
	) : (
		<>
			{location.pathname === '/' ? (
				<Logo />
			) : (
				<NavigationUnauthorizedComponent />
			)}
		</>
	)
}

export default RouterHelper
