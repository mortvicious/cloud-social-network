import React, { FC } from 'react'
import { IUserModel } from './UserModel'

interface IPost {
    content: string
    user: IUserModel
    likes: []
    comments: []
}

const Post: FC<IPost> = ({content, user, likes, comments}) => {
  return (
    <div>Post</div>
  )
}

export default Post