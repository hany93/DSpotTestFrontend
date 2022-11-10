/**Imports */
import React from 'react'
import Images from '@components/image'

const CardPhotos = (props) => {
	return (
		/**Component to show photos card */
		<>
			{props.profile.profilephotos.map((item, index) => {
				return (
					<div
						key={index}
						className='profiles_details__imagecard'
						onClick={() => props.openModal(item.photo)}
					>
						<Images photo={item.photo} width={136} height={136} />
					</div>
				)
			})}
		</>
	)
}

export default CardPhotos
