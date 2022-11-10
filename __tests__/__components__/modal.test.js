import '@testing-library/jest-dom'
import Modal from '@components/modal'
import { render, screen } from '@testing-library/react'

describe('Render CardInfo Component', () => {
	beforeEach(() => {
		render(<Modal />)
	})

	it('Test className modal', () => {
		expect(document.querySelector('div .modal')).toBeInTheDocument()
	})
})
