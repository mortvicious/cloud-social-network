import React, { FC } from 'react'
import newPostStore from '../../store/NewPost/NewPost'
import PostAPI from '../../api/PostAPI'
import { observer } from 'mobx-react-lite'

const FeedCreatePostForm: FC = observer(() => {
	const handleSendBtn = () => {
		PostAPI.createPost(newPostStore.getData())
	}

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		newPostStore.setContent(e.currentTarget.value)
	}

	return (
		<div className='d-flex flex-column'>
			<h4 className='text-primary display-6'>
				<strong>Share your thoughts</strong>
			</h4>
			<div className='input-group feed-create-post-container'>
				<textarea
					placeholder=''
					className='form-control'
					aria-label='With textarea'
					onChange={handleChange}
				></textarea>
				<div className='feed-create-post-btn-container d-flex gap-2'>
					<button
						className='add-image-icon bg-white feed-add-img i-size-20'
						type='button'
						id='button-addon2'
						data-toggle='tooltip'
						data-placement='top'
						title='Add image'
					>
						<i className='bi bi-image text-primary'></i>
					</button>
					<button
						onClick={handleSendBtn}
						className='bg-white i-size-20 '
						type='button'
						id='button-addon2'
						data-toggle='tooltip'
						data-placement='top'
						title='Add post'
					>
						<i className='bi bi-send-fill text-primary'></i>
					</button>
				</div>
			</div>
		</div>
	)
})

export default FeedCreatePostForm
