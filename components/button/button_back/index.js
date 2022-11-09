/**Imports */
import React from 'react'
import Images from '@components/image'
import arrow_back from '@public/images/arrow_back.png'
import Link from 'next/link'

const ButtonBack = () => {
	return (
		/**Component to show button back */
		<div>
			<Link href='/'>
				<div className='profiles_details__back'>
					<Images photo={arrow_back} />
				</div>
			</Link>
		</div>
	)
}

export default ButtonBack
