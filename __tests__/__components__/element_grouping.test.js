import '@testing-library/jest-dom'
import ElementsGrouping from '@components/element_grouping'
import { render, screen } from '@testing-library/react'

describe('Render CardInfo Component', () => {
	beforeEach(() => {
		render(
			<ElementsGrouping
				class_elementsgrouping='profiles_details__elementsgrouping'
				name={'Profile'}
				description={'Profile online'}
			/>
		)
	})

	it('Test text Profile online', () => {
		expect(screen.getByText('Profile online')).toBeInTheDocument()
	})

	it('Test className profiles_details__elementsgrouping', () => {
		expect(
			document.querySelector('div .profiles_details__elementsgrouping')
		).toBeInTheDocument()
	})
})
