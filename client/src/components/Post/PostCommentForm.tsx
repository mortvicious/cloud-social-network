import React, { FC } from 'react'
import CommentAPI from '../../api/CommentAPI'
import newCommentStore from '../../store/NewComment/NewComment'
import { observer } from 'mobx-react-lite'

interface IPostCommentForm {
	postID: string
}

const PostCommentForm: FC<IPostCommentForm> = observer(({ postID }) => {
	const handleSendBtn = () => {
		CommentAPI.addComment(newCommentStore.getData())
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		newCommentStore.setComment(postID, e.currentTarget.value)
	}
	return (
		<div className='input-group mt-4'>
			<input
				placeholder='Share your thoughts!'
				className='form-control bg-light'
				aria-label='With textarea'
				value={newCommentStore.content}
				onChange={handleChange}
			></input>
			<button
				onClick={handleSendBtn}
				className='btn btn-add-comment'
				type='button'
				id='button-addon2'
			>
				<i className='bi bi-send-fill text-primary'></i>
			</button>
		</div>
	)
})

export default PostCommentForm
