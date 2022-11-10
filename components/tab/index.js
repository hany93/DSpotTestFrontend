/**Import */
import React from 'react'

const Tabs = (props) => {
	return (
		/**Component to show Tabs*/
		<ul>
			<li
				onClick={() => props.setSelectedCard(0)}
				className={props.selectedCard === 0 ? 'active' : ''}
			>
				Info
			</li>
			<li
				onClick={() => props.setSelectedCard(1)}
				className={props.selectedCard === 1 ? 'active' : ''}
			>
				Photos
			</li>
		</ul>
	)
}

export default Tabs
