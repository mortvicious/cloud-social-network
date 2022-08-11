import React, { FC } from 'react'
import CommentAPI from '../../api/CommentAPI'
import newCommentStore from '../../store/NewComment/NewComment'
import { observer } from 'mobx-react-lite'

interface IPostCommentForm {
	postID: string
}

const PostCommentForm: FC<IPostCommentForm> = observer(({ postID }) => {
	const handleSendBtn = () => {
		CommentAPI.addComment(newCommentStore.getData(), postID)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		newCommentStore.setContent(e.currentTarget.value)
	}

	return (
		<div className='input-group mt-4'>
			<input
				placeholder='What do you think?'
				className='form-control bg-light'
				aria-label='With textarea'
				onChange={handleChange}
			></input>
			<button
				onClick={handleSendBtn}
				className=' btn-add-comment p-1 ms-2 bg-white'
				type='button'
				id='button-addon2'
				data-toggle='tooltip'
				data-placement='top'
				title='Add comment'
			>
				<i className='bi bi-send-fill text-primary i-size-25'></i>
			</button>
		</div>
	)
})

export default PostCommentForm
