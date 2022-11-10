import '@testing-library/jest-dom'
import ButtonClose from '@components/button/button_close'
import { render, screen } from '@testing-library/react'

describe('ButtonClose Component', () => {
	beforeEach(() => {
		render(<ButtonClose />)
	})

	it('Test role img', () => {
		expect(screen.getByRole('img')).toBeInTheDocument()
	})

	it('Test className close', () => {
		expect(document.querySelector('div .close')).toBeInTheDocument()
	})
})
