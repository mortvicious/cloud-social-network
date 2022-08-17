import { observer } from 'mobx-react-lite'
import React, { FC, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router'
import UserAPI from '../api/UserAPI'
import FeedComponent from '../components/Feed/FeedComponent'
import UserPageTabBtnComponent from '../components/User/UserPageTabBtnComponent'
import UserPageTabComponent from '../components/User/UserPageTabComponent'
import { IUserPageModel } from '../models/User/User.types'
import userPageStore from '../store/User/UserPage'

interface IState {
	id: string
}

const IDUserPage: FC = observer(() => {
	const [isLoading, setLoading] = useState<boolean>(true)
	const [activeTab, setActiveTab] = useState<string>('posts')
	const location = useLocation()
	const state = location.state as IState

	const setUserData = async () => {
		const user: IUserPageModel = await UserAPI.GetUserPageData(state.id)
		userPageStore.setUserPage(user)
		setLoading(false)
	}

	const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { id } = e.currentTarget
		if (activeTab !== id) setActiveTab(id)
	}

	useEffect(() => {
		setUserData()
	}, [])

	return (
		<Container>
			<Row className='mt-5 pb-5 border-bottom align-items-center'>
				<Col xs={7}>
					<div className='d-flex gap-5 align-items-center'>
						<div className='d-flex flex-column avatar-container'>
							<img
								className='img-fluid '
								src='/avatars/5jfk5jgsk5nfsc3.jpg'
								alt=''
							/>
						</div>
						<div className='d-flex flex-column gap-1'>
							<h1>Antonio Margaretti</h1>
							<h3 className='text-muted'>Last seen 2 hours ago</h3>
						</div>
					</div>
				</Col>
				<Col className='d-flex gap-3'>
					<button
						type='button'
						className='btn btn-outline-primary disabled btn-lg ms-auto'
					>
						Message
					</button>
					<button type='button' className='btn btn-outline-primary btn-lg'>
						Request
					</button>
				</Col>
			</Row>
			<Row className='mt-3'>
				<Col className='d-flex justify-content-center gap-5'>
					<UserPageTabBtnComponent
						onClick={handleTabClick}
						name='Posts'
						active={activeTab === 'posts'}
					/>
					<UserPageTabBtnComponent
						onClick={handleTabClick}
						name='Friends'
						active={activeTab === 'friends'}
					/>
					<UserPageTabBtnComponent
						onClick={handleTabClick}
						name='Communities'
						active={activeTab === 'communities'}
					/>
					<UserPageTabBtnComponent
						onClick={handleTabClick}
						name='Shares'
						active={activeTab === 'shares'}
					/>
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col className='d-flex flex-column gap-4'>
					{/* <FeedComponent userID={state.id} /> */}
					<UserPageTabComponent type={activeTab} userID={state.id}/>
				</Col>
			</Row>
		</Container>
	)
})

export default IDUserPage
