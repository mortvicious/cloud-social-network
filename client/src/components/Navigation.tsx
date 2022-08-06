import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation: FC = () => {
  return (
		<Navbar bg='light' variant='dark'>
			<Container className=''>
				<Navbar.Brand className='main-font px-3 pe-5 text-primary' href='#home'>
					<strong>Cloud</strong>
				</Navbar.Brand>
				<Nav className='me-auto w-100 d-flex text-primary gap-5 ml-1 justify-content-between'>
					<div className='d-flex gap-5'>
						<div className='d-flex align-items-center'>
							<i className='bi bi-person-hearts text-primary'></i>
							<Nav.Link className='text-primary' href='#features'>
								Friends
							</Nav.Link>
						</div>
						<div className='d-flex align-items-center'>
							<i className='bi bi-people-fill text-primary'></i>
							<Nav.Link className='text-primary' href='#pricing'>
								Communities
							</Nav.Link>
						</div>
						<div className='d-flex align-items-center'>
							<i className='bi bi-chat-dots-fill text-primary'></i>
							<Nav.Link className='text-primary' href='#pricing'>
								Messenger
							</Nav.Link>
						</div>
					</div>
					<div className='d-flex gap-5'>
						<div className='d-flex align-items-center'>
							<i className='bi bi-person-fill text-primary'></i>
							<Nav.Link className='text-primary' href='#features'>
								<strong>User</strong>
							</Nav.Link>
						</div>
						<div className='d-flex align-items-center'>
							<i className='bi bi-gear-wide text-primary'></i>
							<Nav.Link className='text-primary' href='#features'>
								<strong>Settings</strong>
							</Nav.Link>
						</div>
					</div>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Navigation