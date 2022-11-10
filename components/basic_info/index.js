/**Imports */
import React from 'react'
import Text from '@components/text'

const BasicInfo = (props) => {
	return (
		/**Basic information about the selected profile*/
		<div className='profiles_details_info__card__basicInfo'>
			<div>
				<Text
					class_textSpan='profiles_details_info__card__label'
					text='Address:'
				/>
				<Text
					class_textSpan='profiles_details_info__card__text'
					text={props.profile.address}
				/>
			</div>
			<div>
				<Text
					class_textSpan='profiles_details_info__card__label'
					text='City:'
				/>
				<Text
					class_textSpan='profiles_details_info__card__text'
					text={props.profile.city}
				/>
			</div>
			<div>
				<Text
					class_textSpan='profiles_details_info__card__label'
					text='State:'
				/>
				<Text
					class_textSpan='profiles_details_info__card__text'
					text={props.profile.state}
				/>
			</div>
			<div>
				<Text
					class_textSpan='profiles_details_info__card__label'
					text='Zipcode:'
				/>
				<Text
					class_textSpan='profiles_details_info__card__text'
					text={props.profile.zipcode}
				/>
			</div>
		</div>
	)
}

export default BasicInfo
