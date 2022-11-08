/**Imports */
import List from '@components/profile_list'
import TitleProfileList from "@components/utils/title_profile_list"

/**Import method from api to obtain profiles */
import { getAllProfiles } from "@api"

const Home = ({ profiles }) => {
  return (
    <section className="profileslist">
      <div className="profileslist__centercontainer">
        <TitleProfileList />
        {profiles ?
          /**Profiles List */
          (<List profiles={profiles} />)
          :
          /**Loading */
          (<div className='profileslist__loaderContainer'><div className="profileslist__loader" />Loading...</div>)
        }
      </div>
    </section>
  )
}

/**Add server side rendering to page */
export const getServerSideProps = async (ctx) => {

  /**Consume api to obtain profiles */
  const res = await getAllProfiles()

  return {
    /**Pass props to page */
    props: {
      profiles: res.data
    }
  }
}

export default Home;
