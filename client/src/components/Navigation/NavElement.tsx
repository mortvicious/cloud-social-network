import React, { FC } from 'react'
import {NavLink} from 'react-router-dom'

interface INavElement {
	// className: string
	title: string
	icon: string
	to: string
	active?: boolean
	onClick: React.MouseEventHandler<HTMLDivElement>
}

const NavElement: FC<INavElement> = ({title, icon, to, active, onClick}) => {
  return (
		<NavLink to={to}>
			<div
				className={
					'd-flex align-items-center' +
					` ` +
					(active
						? 'border-bottom border-3 border-secondary nav-icon-container'
						: '')
				}
				data-toggle='tooltip'
				data-placement='top'
				title={title}
				onClick={onClick}
			>
				<i className={icon + ` ` + 'nav-icon'}></i>
			</div>
		</NavLink>
	)
}

export default NavElement