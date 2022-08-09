import React, { FC } from 'react'

interface IPostCommentForm {

}

const PostCommentForm: FC<IPostCommentForm> = () => {
	const handleSendBtn = () => {

	}
	return (
		<form className='pt-1 pb-1 d-flex align-items-center gap-2'>
			<input
				className='bg-light border p-1 mt-1 w-100 post-comment-input form-control'
				placeholder='Share your thoughts'
				type='text'
			/>
			<button
				onClick={handleSendBtn}
				className='btn btn-light border pt-1 pb-1 d-flex align-items-center'
			>
				<i className='bi bi-send'></i>
			</button>
		</form>
	)
}

export default PostCommentForm
