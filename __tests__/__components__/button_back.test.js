import '@testing-library/jest-dom'
import ButtonBack from '@components/button/button_back'
import { render, screen } from '@testing-library/react'

describe('Render ButtonBack Component', () => {
	it('Test role link and className profiles_details__back', () => {
		render(<ButtonBack />)
		expect(screen.getByRole('link').getAttribute('href')).toBe('/')
		expect(
			document.querySelector('div .profiles_details__back')
		).toBeInTheDocument()
	})
})
