import ButtonDetails from '@components/button/button_details'
import { render, screen } from '@testing-library/react'

describe('ButtonDetails Component', () => {
	it('Render button details', () => {
		render(<ButtonDetails />)
		expect(screen.getByRole('link').getAttribute('href')).toBe('/')
	})
})
