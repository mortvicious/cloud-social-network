import React, { FC } from 'react'

interface IPostFunctionBtn {
	icon: string
    content: string
    onClick: () => void
}

const PostFunctionBtn: FC<IPostFunctionBtn> = ({ icon, content, onClick }) => {
	return (
		<button onClick={onClick} type='button' className='btn btn-light border pt-1 pb-1 d-flex align-items-center gap-2'>
			<i className={icon}></i>
			<span className='post-function-btn'>{content}</span>
		</button>
	)
}

export default PostFunctionBtn
