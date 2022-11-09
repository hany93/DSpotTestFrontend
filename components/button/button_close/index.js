/**Imports */
import React from 'react'
import Images from '@components/image'
import close from '@public/images/close.png'
import useButtonClose from '@hook/useButtonClose'

const ButtonBack = () => {
	const { closeModal } = useButtonClose()
	return (
		/**Component to show button close modal */
		<span className='close' onClick={() => closeModal()}>
			<Images photo={close} />
		</span>
	)
}

export default ButtonBack
