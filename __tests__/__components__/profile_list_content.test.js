import '@testing-library/jest-dom'
import ProfileList from '@components/profile_list_content'
import { render } from '@testing-library/react'
import { profiles } from '__mocks__/profile'

describe('Render ProfileList Component', () => {
	beforeEach(() => {
		render(<ProfileList profiles={profiles} />)
	})
	it('Test className profileslist__list', () => {
		expect(document.querySelector('.profileslist__list')).toBeInTheDocument()
	})

	it('Test className profileslist__card', () => {
		expect(
			document.querySelector('div .profileslist__card')
		).toBeInTheDocument()
	})
})
