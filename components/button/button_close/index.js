/**Imports */
import React from 'react'
import Images from '@components/image'
import close from '@public/images/close.png'
import useButtonClose from '@hook/useButtonClose'

const ButtonClose = () => {
	const { closeModal } = useButtonClose()
	return (
		/**Component to show button close modal */
		<span className='close' onClick={() => closeModal()}>
			<Images photo={close} />
		</span>
	)
}

export default ButtonClose
