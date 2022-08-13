import { observer } from 'mobx-react-lite'
import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import UserAPI from '../api/UserAPI'
import { IUserPageModel } from '../models/User/User.types'
import userPageStore from '../store/User/UserPage'


interface IState {
  id: string
}

const IDUserPage: FC = observer(() => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const location = useLocation()
  const state = location.state as IState

  const setUserData = async () => {
    const user: IUserPageModel = await UserAPI.getUserPageData(state.id)
    userPageStore.setUserPage(user)
    setLoading(false)
  }

  useEffect(() => {
    setUserData()
  }, [])
  
  return (
		<div>
			IDUserPage
			<div className='d-flex flex-column avatar-container'>
				<img className='img-fluid ' src='/avatars/5jfk5jgsk5nfsc3.jpg' alt='' />
			</div>
		</div>
	)
})

export default IDUserPage