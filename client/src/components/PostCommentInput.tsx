import React from 'react'
import { Container } from 'react-bootstrap'

const PostCommentInput = () => {
	return (
		<form className='d-flex gap-1 align-items-center mt-2'>
			<input
				className='bg-light border p-1 mt-1 w-100 post-comment-input'
				placeholder='Share your thoughts'
				type='text'
			/>
			<button className='btn btn-primary btn-sm'>
				<i className='bi bi-send'></i>
			</button>
		</form>
	)
}

export default PostCommentInput
