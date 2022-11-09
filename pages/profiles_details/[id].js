/**Imports */
import ButtonBack from '@components/button/button_back'
import Modal from '@components/modal'
import ProfileDetail from '@components/profile_detail'

/**Import method from api to obtain selected profile */
import { getProfileById } from '@api'

const ProfilesDetails = ({ profile }) => {
	return (
		<section className='profiles_details'>
			<ButtonBack />
			<div className='profiles_details__centercontainer'>
				<ProfileDetail profile={profile} />
			</div>
			<Modal />
		</section>
	)
}

/**Add server side rendering to page */
export const getServerSideProps = async ({ params }) => {
	/**Consume api to obtain selected profile */
	const res = await getProfileById(params.id)

	return {
		/**Pass props to page */
		props: {
			profile: res.data,
		},
	}
}

export default ProfilesDetails
