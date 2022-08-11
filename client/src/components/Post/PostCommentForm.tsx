import React, { FC } from 'react'

interface IPostCommentForm {

}

const PostCommentForm: FC<IPostCommentForm> = () => {
	const handleSendBtn = () => {

	}
	return (
		<div className='input-group mt-4'>
			<input
				placeholder='Share your thoughts!'
				className='form-control bg-light'
				aria-label='With textarea'

			></input>
			<button className='btn btn-add-comment' type='button' id='button-addon2'>
				<i className='bi bi-send-fill text-primary'></i>
			</button>
		</div>
	)
}

export default PostCommentForm
