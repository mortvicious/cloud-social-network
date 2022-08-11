import React, { FC } from 'react'

interface IPostFunctionBtnComponent {
	icon: string
	content: string
	title: string
	onClick: () => void
}

const PostFunctionBtnComponent: FC<IPostFunctionBtnComponent> = ({
	icon,
	content,
	onClick,
	title,
}) => {
	return (
		<button
			data-toggle='tooltip'
			data-placement='top'
			title={title}
			onClick={onClick}
			type='button'
			className='btn btn-light border pt-1 pb-1 d-flex align-items-center gap-2'
		>
			<i className={icon}></i>
			<span className='post-function-btn'>{content}</span>
		</button>
	)
}

export default PostFunctionBtnComponent
