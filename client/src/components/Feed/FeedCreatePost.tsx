import React, { FC } from 'react'

const FeedCreatePost: FC = () => {
  return (
		<div className='input-group'>
			{/* <span className='input-group-text'>With textarea</span> */}
			<textarea placeholder='Share your thoughts!' className='form-control' aria-label='With textarea'></textarea>
			<button
				className='btn btn-light add-image-icon '
				type='button'
				id='button-addon2'
			>
				<i className='bi bi-image text-primary'></i>
			</button>
			<button className='btn btn-primary ' type='button' id='button-addon2'>
				<i className='bi bi-send-fill'></i>
			</button>
		</div>
	)
}

export default FeedCreatePost