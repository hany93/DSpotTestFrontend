import List from '../components/profile_list'
import TitleProfileList from "../components/utils/title_profile_list"

import { getAllProfiles } from "../api"

const Home = ({ profiles }) => {
  return (
    <section className="profileslist">
      <div className="profileslist__centercontainer">
        <TitleProfileList />
        {profiles ?
          <List profiles={profiles} />
          :
          <div className='profileslist__loaderContainer'><div className="profileslist__loader" />Loading...</div>}
      </div>
    </section>
  )
}

export const getServerSideProps = async (ctx) => {

  const res = await getAllProfiles()

  return {
    props: {
      profiles: res.data
    }
  }
}

export default Home;
