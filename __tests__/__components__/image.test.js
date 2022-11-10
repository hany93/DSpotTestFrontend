import '@testing-library/jest-dom'
import Images from '@components/image'
import { render, screen } from '@testing-library/react'
import { profile } from '__mocks__/profile'

const photo = profile.photo

describe('Render CardInfo Component', () => {
	beforeEach(() => {
		render(
			<Images
				class_image='profiles_details__image'
				photo={photo}
				width={136}
				height={136}
			/>
		)
	})

	it('Test role img', () => {
		expect(screen.getByRole('img')).toBeInTheDocument()
	})

	it('Test className profiles_details__image', () => {
		expect(
			document.querySelector('div .profiles_details__image')
		).toBeInTheDocument()
	})
})
