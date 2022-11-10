import '@testing-library/jest-dom'
import ProfileDetail from '@components/profile_detail_content'
import { render, screen } from '@testing-library/react'
import { profile } from '__mocks__/profile'

describe('Render ProfileDetail Component', () => {
	beforeEach(() => {
		render(<ProfileDetail profile={profile} />)
	})

	it('Test role img', () => {
		expect(screen.getByRole('img')).toBeInTheDocument()
	})

	it('Test className profiles_details__infoavatar', () => {
		expect(
			document.querySelector('div .profiles_details__infoavatar')
		).toBeInTheDocument()
	})

	it('Test className profiles_details__tab', () => {
		expect(
			document.querySelector('div .profiles_details__tab')
		).toBeInTheDocument()
	})
})
