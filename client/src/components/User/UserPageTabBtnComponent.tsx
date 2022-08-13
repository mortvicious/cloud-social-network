import React, { FC } from 'react'

interface IUserPageTabBtnComponent {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
	name: string
	active: boolean
}

const UserPageTabBtnComponent: FC<IUserPageTabBtnComponent> = ({
	onClick,
	name,
	active,
}) => {
	const id = name.toLowerCase()
	return (
			<button
				onClick={onClick}
				id={id}
				type='button'
				className={
					'btn-outline-muted bg-light btn-lg p-2 i-size-20 border-bottom border-3 border-light' +
					(active ? 'border-bottom border-3 border-secondary' : '')
				}
			>
				{name}
			</button>
	)
}

export default UserPageTabBtnComponent
