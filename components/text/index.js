/**Imports */
import React from 'react'

const TextSpan = (props) => {
	return (
		/**Component to show Text*/
		<>
			{props.text ? (
				<span className={props.class_textSpan ? props.class_textSpan : ''}>
					{props.text}
				</span>
			) : (
				<span className={props.class_textSpan ? props.class_textSpan : ''} />
			)}
		</>
	)
}

export default TextSpan
