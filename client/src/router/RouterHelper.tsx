import React, { FC } from 'react'
import Logo from '../components/Logo'
import NavigationUnauthorized from '../components/NavigationUnauthorized'
import Navigation from '../components/Navigation'
import { useLocation } from 'react-router'

interface IRouterHelper {
	authorized: boolean
}

const RouterHelper: FC<IRouterHelper> = ({ authorized }) => {
	let location = useLocation()
	return authorized ? (
		<Navigation />
	) : (
		<>{location.pathname === '/' ? <Logo /> : <NavigationUnauthorized />}</>
	)
}

export default RouterHelper
