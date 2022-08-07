import React, { FC } from 'react'

interface INotificationBell {
    onClick: () => void
}

const NotificationBell: FC<INotificationBell> = ({onClick}) => {
  return (
		<div
			className='d-flex align-items-center'
			data-toggle='tooltip'
			data-placement='top'
			title='Notifications'
			onClick={onClick}
		>
			<i className='bi bi-bell-fill text-black-50 i-size-25 nav-icon'></i>
		</div>
	)
}

export default NotificationBell