import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavElement from './NavElement';

const Navigation: FC = () => {
  return (
		<Navbar className='border-bottom' bg='light' variant='light'>
			<Container className='d-flex w-100 justify-content-between'>
				<Navbar.Brand className='main-font px-3 pe-5 text-primary' href='#home'>
					<strong>Cloud</strong>
				</Navbar.Brand>
				<Nav className='d-flex text-primary ml-1 gap-3'>
					<NavElement
						className='d-flex align-items-center border-bottom border-3 border-secondary'
						title='Home'
						icon='bi bi-house-fill text-body text-black-50 i-size-25'
					/>
					<NavElement
						className='d-flex align-items-center'
						title='Friends'
						icon='bi bi-person-hearts text-body text-black-50 i-size-25'
					/>
					<NavElement
						className='d-flex align-items-center'
						title='Communities'
						icon='bi bi-people-fill text-black-50 i-size-25'
					/>
					<NavElement
						className='d-flex align-items-center'
						title='Messenger'
						icon='bi bi-chat-dots-fill text-black-50 i-size-25'
					/>
				</Nav>
				<Nav className='d-flex text-primary gap-3 ml-1 '>
					<NavElement
						className='d-flex align-items-center'
						title='User'
						icon='bi bi-person-fill text-black-50 i-size-25'
					/>
					<NavElement
						className='d-flex align-items-center'
						title='Settings'
						icon='bi bi-gear-wide text-black-50 i-size-25'
					/>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Navigation