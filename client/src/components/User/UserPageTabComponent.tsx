import React, { FC } from 'react'
import FeedComponent from '../Feed/FeedComponent'
import UserCommunitiesList from './UserCommunitiesList'
import UserFriendList from './UserFriendList'
import UserSharesList from './UserSharesList'

interface IUserPageTabComponent {
  type: string
  userID: string
}

const UserPageTabComponent: FC<IUserPageTabComponent> = ({type, userID}) => {
  return (
    <React.Fragment>
      {type === 'posts' ? <FeedComponent userID={userID} /> : null}
      {type === 'friends' ? <UserFriendList /> : null}
      {type === 'communities' ? <UserCommunitiesList /> : null}
      {type === 'shares' ? <UserSharesList/> : null}
    </React.Fragment>
  )
}

export default UserPageTabComponent