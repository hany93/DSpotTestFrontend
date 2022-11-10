import '@testing-library/jest-dom'
import CardInfo from '@components/card/card_info'
import { render, screen } from '@testing-library/react'
import { profile } from '__mocks__/profile'

describe('Render CardInfo Component', () => {
	beforeEach(() => {
		render(<CardInfo profile={profile} />)
	})

	it('Test text Bio', () => {
		expect(screen.getByText('My bio')).toBeInTheDocument()
	})

	it('Test text Phone', () => {
		expect(screen.getByText('54773819')).toBeInTheDocument()
	})
})
