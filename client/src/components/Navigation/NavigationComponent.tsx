import React, { FC, ReactEventHandler, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavElementComponent from './NavElementComponent'
import NotificationBellComponent from './NotificationBellComponent'
import SearchComponent from './SearchComponent'
import user from '../../store/User/User'

const NavigationComponent: FC = () => {
	const [activeLink, setActiveLink] = useState<string>('Home')
	const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		const title = e.currentTarget.title
		setActiveLink(title)
	}
	const handleNotificationClick = () => {}
	const DEBUG_LOGOUT = () => {
		user.setAuth(false)
	}
	return (
		<Navbar className='border-bottom' bg='light' variant='light'>
			<Container className='d-flex w-100 justify-content-between align-items-center'>
				<Navbar.Brand className='main-font px-3 pe-5 text-primary' href='#home'>
					<strong>Cloud</strong>
				</Navbar.Brand>
				<Nav className='d-flex text-primary ml-1 gap-3 align-items-center'>
					<NavElementComponent
						// className='d-flex align-items-center'
						title='Home'
						icon='bi bi-house-fill text-body text-black-50 i-size-25'
						onClick={handleClick}
						to='/'
						active={activeLink === 'Home'}
					/>
					<NavElementComponent
						// className='d-flex align-items-center'
						title='Friends'
						icon='bi bi-person-hearts text-body text-black-50 i-size-25'
						onClick={handleClick}
						to='/friends'
						active={activeLink === 'Friends'}
					/>
					<NavElementComponent
						// className='d-flex align-items-center'
						title='Communities'
						icon='bi bi-people-fill text-black-50 i-size-25'
						onClick={handleClick}
						to='/communities'
						active={activeLink === 'Communities'}
					/>
					<NavElementComponent
						// className='d-flex align-items-center'
						title='Messenger'
						icon='bi bi-chat-dots-fill text-black-50 i-size-25'
						onClick={handleClick}
						to='/messenger'
						active={activeLink === 'Messenger'}
					/>
				</Nav>
				<Nav className='d-flex text-primary gap-3 ml-1 align-items-center'>
					<SearchComponent />
					<NotificationBellComponent onClick={handleNotificationClick} />
					<NavElementComponent
						// className='d-flex align-items-center'
						title='Settings'
						icon='bi bi-gear-wide text-black-50 i-size-25'
						onClick={handleClick}
						to='/settings'
						active={activeLink === 'Settings'}
					/>
					<NavElementComponent
						// className='d-flex align-items-center'
						title='User'
						icon='bi bi-person-fill text-black-50 i-size-25'
						onClick={DEBUG_LOGOUT}
						to='/'
						active={activeLink === 'User'}
					/>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default NavigationComponent
