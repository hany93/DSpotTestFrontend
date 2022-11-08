const axios = require("axios");

const ExAPI = "http://localhost:8000";

/**Profiles**/

const getAllProfiles = () => {
  console.log('si');
  return axios.get(`${ExAPI}/profiles/profiles/`);
};

const getProfileById = (profile_id) => {
  return axios.get(`${ExAPI}/profiles/profiles/` + profile_id + '/');
};

export default ExAPI;
export {
  getAllProfiles,
  getProfileById
};
