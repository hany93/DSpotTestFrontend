const axios = require('axios')

/**URL server */
const ExAPI = 'http://localhost:8000'

/**Profiles**/

/**Obtain profiles */
const getAllProfiles = () => {
	return axios.get(`${ExAPI}/profiles/profiles/`)
}

/**Obtain selected profile */
const getProfileById = (profile_id) => {
	return axios.get(`${ExAPI}/profiles/profiles/` + profile_id + '/')
}

export default ExAPI
export { getAllProfiles, getProfileById }
