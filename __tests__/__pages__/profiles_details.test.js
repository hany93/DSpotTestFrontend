import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { profile } from '__mocks__/profile'
import { getServerSideProps } from '@pages/profiles_details/[id]'
import PageDetails from '@pages/profiles_details/[id]'
import mockAxios from 'axios'
jest.mock('axios')

const mockCallAPI = async (url) => {
	const data = url
	mockAxios.get.mockResolvedValue({ status: 200, data: data })
}

describe('Test profile details page', () => {
	beforeEach(() => {})

	const context = {
		params: { id: 2 },
		req: { headers: { host: 'localhost' } },
	}

	it('Testing endpoint get profile detail', async () => {
		const url = [
			{
				id: 2,
				photo: 'http://localhost:8000/avatar_PSieFAs.png',
				first_name: 'Leo',
				last_name: 'Leo',
				phone: '54773819',
				address: '259 A Paseo de la Castellana, Madrid, 28046',
				city: 'Cuba',
				state: '54',
				zipcode: '54',
				bio: '54',
				status: 1,
				available: false,
				friends: [3],
				profilephotos: [],
				textStatus: 'This could be interesting....',
			},
		]
		mockCallAPI(url)
		const response = await getServerSideProps(context)
		expect(response.props.profile).toEqual(url)
	})

	it('Test className profiles_details', () => {
		render(<PageDetails profile={profile} />)
		expect(document.querySelector('.profiles_details')).toBeInTheDocument()
	})
})
