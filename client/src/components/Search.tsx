import React from 'react'

const Search = () => {
	return (
		<div className='input-group align-items-center'>
			<input
				type='text'
				className='form-control input-sm'
				placeholder='Search'
				aria-label='Search'
				aria-describedby='button-addon2'
			/>
			<button className='btn btn-sm search-icon' type='button' id='button-addon2'>
				<i className='bi bi-search text-black-50'></i>
			</button>
		</div>
	)
}

export default Search
