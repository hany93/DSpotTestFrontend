import '@testing-library/jest-dom'
import TextSpan from '@components/text'
import { render, screen } from '@testing-library/react'

describe('Render TextSpan Component', () => {
	beforeEach(() => {
		render(
			<TextSpan
				class_textSpan='profiles_details_info__card__label'
				text='Address:'
			/>
		)
	})

	it('Test text Info', () => {
		expect(screen.getByText('Address:')).toBeInTheDocument()
	})

	it('Test className profiles_details_info__card__label', () => {
		expect(
			document.querySelector('.profiles_details_info__card__label')
		).toBeInTheDocument()
	})
})
