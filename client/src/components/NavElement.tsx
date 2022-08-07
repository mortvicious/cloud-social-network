import React, { FC } from 'react'

interface INavElement {
    className: string
    title: string
    icon: string
}

const NavElement: FC<INavElement> = ({className, title, icon}) => {
  return (
		<div
			className={className}
			data-toggle='tooltip'
			data-placement='top'
			title={title}
		>
			<i className={icon}></i>
		</div>
	)
}

export default NavElement