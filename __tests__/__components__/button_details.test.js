import '@testing-library/jest-dom'
import ButtonDetails from '@components/button/button_details'
import { render, screen } from '@testing-library/react'

const profile_id = { id: 1 }

describe('ButtonDetails Component', () => {
	beforeEach(() => {
		render(<ButtonDetails profile={profile_id} />)
	})

	it('Test role link', () => {
		expect(screen.getByRole('link').getAttribute('href')).toBe(
			'/profiles_details/' + profile_id.id
		)
	})

	it('Test className profileslist__button', () => {
		expect(
			document.querySelector('div .profileslist__button')
		).toBeInTheDocument()
	})
})
