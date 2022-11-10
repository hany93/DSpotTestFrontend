import '@testing-library/jest-dom'
import Ellipse from '@components/ellipse'
import { render, screen } from '@testing-library/react'

describe('Render CardInfo Component', () => {
	beforeEach(() => {
		render(<Ellipse class_ellipse='profileslist__ellipse' />)
	})

	it('Test className profileslist__ellipse', () => {
		expect(
			document.querySelector('div .profileslist__ellipse')
		).toBeInTheDocument()
	})
})
