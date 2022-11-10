import '@testing-library/jest-dom'
import CardPhotos from '@components/card/card_photos'
import { render, screen } from '@testing-library/react'
import { profile } from '__mocks__/profile'

const openModal = jest.fn()

describe('Render CardInfo Component', () => {
	beforeEach(() => {
		render(<CardPhotos profile={profile} openModal={openModal} />)
	})

	it('Test className profiles_details__imagecard', () => {
		expect(
			document.querySelector('div .profiles_details__imagecard')
		).toBeInTheDocument()
	})
})
