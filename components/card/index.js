/**Imports */
import React from 'react'
import CardPhotos from '@components/card/card_photos'
import CardInfo from '@components/card/card_info'

const Card = (props) => {
	return (
		/**Component to show card */
		<div
			className={
				props.selectedCard === 0
					? 'profiles_details_info__card'
					: 'profiles_details_photos__card'
			}
		>
			{props.selectedCard === 0 ? (
				/**Component to show information card */
				<CardInfo profile={props.profile} />
			) : (
				/**Component to show photos card */
				<CardPhotos profile={props.profile} openModal={props.openModal} />
			)}
		</div>
	)
}

export default Card
