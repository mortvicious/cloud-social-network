import React, { FC } from 'react'

interface IPostCommentForm {

}

const PostCommentForm: FC<IPostCommentForm> = () => {
	const handleSendBtn = () => {

	}
	return (
		// <form className='pt-1 pb-1 d-flex align-items-center gap-2'>
		// 	<input
		// 		className='bg-light border p-1 mt-1 w-100 post-comment-input form-control'
		// 		placeholder='Share your thoughts'
		// 		type='text'
		// 	/>
		// 	<button
		// 		onClick={handleSendBtn}
		// 		className='btn btn-light border pt-1 pb-1 d-flex align-items-center'
		// 	>
		// 		<i className='bi bi-send'></i>
		// 	</button>
		// </form>
		<div className='input-group mt-4'>
			{/* <span className='input-group-text'>With textarea</span> */}
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
