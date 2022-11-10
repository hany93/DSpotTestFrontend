import '@testing-library/jest-dom'
import ButtonBack from '@components/button/button_back'
import { render, screen } from '@testing-library/react'

describe('Render ButtonBack Component', () => {
	beforeEach(() => {
		render(<ButtonBack />)
	})

	it('Test role link', () => {
		expect(screen.getByRole('link').getAttribute('href')).toBe('/')
	})

	it('Test role img', () => {
		expect(screen.getByRole('img')).toBeInTheDocument()
	})

	it('Test className profiles_details__back', () => {
		expect(
			document.querySelector('div .profiles_details__back')
		).toBeInTheDocument()
	})

	it('Test Snapshot', () => {
		var { container } = render(<ButtonBack />)
		expect(container).toMatchSnapshot()
	})
})
