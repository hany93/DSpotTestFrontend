import ButtonClose from '@components/button/button_close'
import { render, screen } from '@testing-library/react'

describe('ButtonClose Component', () => {
	it('Render button close', () => {
		render(<ButtonClose />)
		expect(screen.getByRole('link').getAttribute('href')).toBe('/')
	})
})
