import { useState } from 'react'

const useProfileDetails = () => {
	const [selectedCard, setSelectedCard] = useState(0),
		/**Method to open modal */
		openModal = (image) => {
			/**Disable Scroll*/
			document.body.style.overflow = 'hidden'

			/**Get the modal*/
			let modal = document.getElementById('modal_image')

			/**Get the image and insert it inside the modal*/
			let modalImg = document.getElementById('img_enlarged')
			modal.style.display = 'flex'
			modalImg.src = image
		}

	return { selectedCard, setSelectedCard, openModal }
}

export default useProfileDetails
