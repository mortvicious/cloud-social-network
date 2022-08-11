import React, { FC } from 'react'
import newPostStore from '../../store/NewPost/NewPost'
import PostAPI from '../../api/PostAPI'
import { observer } from 'mobx-react-lite'

const FeedCreatePost: FC = observer(() => {

	const handleSendBtn = () => {
		PostAPI.createPost(newPostStore.getData())
	}

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		newPostStore.setContent(e.currentTarget.value)
	}
	
	return (
		<div className='d-flex flex-column'>
			<h4 className='text-primary display-6'><strong>Share your thoughts</strong></h4>
			<div className='input-group'>
				<textarea
					placeholder=''
					className='form-control'
					aria-label='With textarea'
					onChange={handleChange}
				></textarea>
				<button
					className='btn btn-light add-image-icon '
					type='button'
					id='button-addon2'
				>
					<i className='bi bi-image text-primary'></i>
				</button>
				<button
					onClick={handleSendBtn}
					className='btn btn-primary '
					type='button'
					id='button-addon2'
				>
					<i className='bi bi-send-fill'></i>
				</button>
			</div>
		</div>
	)
})

export default FeedCreatePost
