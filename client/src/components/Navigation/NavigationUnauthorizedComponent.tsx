import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const NavigationUnauthorizedComponent: FC = () => {
    return (
        <Navbar className='border-bottom' bg='light' variant='light'>
            <Container className='d-flex w-100 justify-content-between align-items-center'>
                <Navbar.Brand className='main-font px-3 pe-5 text-primary' href='#home'>
                    <strong>Cloud</strong>
                </Navbar.Brand>
                <Nav className='d-flex text-primary gap-3 ml-1 align-items-center'>
                    <NavLink className='btn' to='/'>
						Login
                    </NavLink>
                    <NavLink className='btn' to='/registration'>
						Registration
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationUnauthorizedComponent
