import React, { FC } from 'react'

interface IPostFetchedCommentsComponent {
    comments: string[]
}

const PostFetchedCommentsComponent: FC<IPostFetchedCommentsComponent> = ({comments}) => {
    return (
        <div></div>
    )
}

export default PostFetchedCommentsComponent