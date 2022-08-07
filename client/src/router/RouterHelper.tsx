import React, { FC } from 'react'
import Logo from '../components/Logo'
import NavigationUnauthorized from '../components/NavigationUnauthorized'
import { useLocation } from 'react-router'

const RouterHelper: FC = () => {
    let location = useLocation()
  return (
		<>
			{location.pathname === '/' ? (
				<Logo />
			) : (
				<NavigationUnauthorized />
			)}
		</>
	)
}

export default RouterHelper