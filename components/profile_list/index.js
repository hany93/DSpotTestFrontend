/**Imports */
import React from 'react'
import ElementsGrouping from '@components/element_grouping'
import ButtonDetails from '@components/button/button_details'
import Ellipse from '@components/ellipse'
import Images from '@components/image'

const ProfileList = ({ profiles }) => {
	return (
		/**Component to show profile list */
		<div className='profileslist__list'>
			{profiles.map((item) => {
				return (
					<div key={item.id} className='profileslist__card'>
						<div>
							<div>
								<Images photo={item.photo} width={60} height={60} />
								<Ellipse
									class_ellipse={
										item.available
											? 'profileslist__ellipse'
											: 'profileslist__ellipse_not_available'
									}
								/>
							</div>
							<ElementsGrouping
								class_elementsgrouping='profileslist__elementsgrouping'
								name={item.first_name + ' ' + item.last_name}
								description={item.textStatus}
							/>
						</div>
						<ButtonDetails profile={item} />
					</div>
				)
			})}
		</div>
	)
}

export default ProfileList
