import React from "react";
import List from '../../components/list/list'
import TitleProfileList from "../../components/title_profile_list";

const ProfileList = () => {
    return (
        <section className="profileslist">
            <div className="profileslist__centercontainer">
                <TitleProfileList />
                <List />
            </div>
        </section>
    );
};

export default ProfileList;