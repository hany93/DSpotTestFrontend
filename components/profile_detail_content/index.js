/**Imports */
import React from 'react'
import ElementsGrouping from '@components/element_grouping'
import Images from '@components/image'
import Ellipse from '@components/ellipse'
import Tabs from '@components/tab'
import useProfileDetails from '@hook/useProfileDetails'
import Card from '@components/card'

const ProfileDetail = (props) => {
	const { selectedCard, setSelectedCard, openModal } = useProfileDetails()
	return (
		/**Component to show profile details */
		<>
			<div className='profiles_details__infoavatar'>
				<div>
					<Images
						photo={props.profile.photo}
						class_image='profiles_details__image'
						width={150}
						height={150}
					/>
					<Ellipse
						class_ellipse={
							props.profile.available
								? 'profiles_details__ellipse'
								: 'profiles_details__ellipse_not_available'
						}
					/>
				</div>
				<ElementsGrouping
					class_elementsgrouping='profiles_details__elementsgrouping'
					name={props.profile.first_name + ' ' + props.profile.last_name}
					description={props.profile.textStatus}
				/>
			</div>
			<div className='profiles_details__tab'>
				<Tabs selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
				<Card
					selectedCard={selectedCard}
					profile={props.profile}
					openModal={openModal}
				/>
			</div>
		</>
	)
}

export default ProfileDetail
