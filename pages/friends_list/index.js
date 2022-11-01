import React from "react";
import List from '../../components/list'

const FriendsList = () => {    
    return (
        <section className="friendslist">
            <div className="friendslist__centercontainer">
                <div className="friendslist__title">
                    <span>Friends</span>
                </div>
                <List />
            </div>
        </section>
    );
};

export default FriendsList;