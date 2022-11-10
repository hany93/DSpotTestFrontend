/**Imports */
import React from 'react'
import BasicInfo from '@components/basic_info'
import Text from '@components/text'

const CardInfo = (props) => {
	return (
		/**Component to show information card */
		<>
			<div>
				<Text class_textSpan='profiles_details_info__card__label' text='Bio:' />
				<Text
					class_textSpan='profiles_details_info__card__text'
					text={props.profile.bio}
				/>
			</div>
			{/**Component to show line*/}
			<Text class_textSpan='profiles_details_info__card__line' />
			<div>
				<Text
					class_textSpan='profiles_details_info__card__label'
					text='Phone:'
				/>
				<Text
					class_textSpan='profiles_details_info__card__text'
					text={props.profile.phone}
				/>
			</div>
			{/**Component to show line*/}
			<Text class_textSpan='profiles_details_info__card__line' />
			<BasicInfo profile={props.profile} />
		</>
	)
}

export default CardInfo
