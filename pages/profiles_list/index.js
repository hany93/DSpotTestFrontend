import React from "react";
import List from '../../components/list'

const ProfileList = () => {    
    return (
        <section className="profileslist">
            <div className="profileslist__centercontainer">
                <div className="profileslist__title">
                    <span>Friends</span>
                </div>
                <List />
            </div>
        </section>
    );
};

export default ProfileList;