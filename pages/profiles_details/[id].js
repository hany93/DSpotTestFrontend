import ButtonBack from "@components/button/button_back";
import Modal from "@components/modal";
import ProfileDetail from "@components/profile_detail";
import {
    getProfileById
} from "@api";

const ProfilesDetails = ({ profile }) => {
    return (
        <section className="profiles_details">
            <ButtonBack />
            <div className="profiles_details__centercontainer">
                <ProfileDetail profile={profile} />
            </div>
            <Modal />
        </section>
    );
};

export const getServerSideProps = async ({ params }) => {

    const res = await getProfileById(params.id)

    return {
        props: {
            profile: res.data
        }
    }
}

export default ProfilesDetails;