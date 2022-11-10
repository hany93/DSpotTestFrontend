import '@testing-library/jest-dom'
import Tabs from '@components/tab'
import { render, screen } from '@testing-library/react'

const setSelectedCard = jest.fn()

describe('Render ProfileList Component', () => {
	beforeEach(() => {
		render(<Tabs selectedCard={0} setSelectedCard={setSelectedCard} />)
	})

	it('Test text Info', () => {
		expect(screen.getByText('Info')).toBeInTheDocument()
	})

	it('Test text Photos', () => {
		expect(screen.getByText('Photos')).toBeInTheDocument()
	})

	it('Test className active', () => {
		expect(document.querySelector('.active')).toBeInTheDocument()
	})
})
