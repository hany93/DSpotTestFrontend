import React from "react";
import List from '../../components/list'

const FriendsList = () => {
    return (
        <section className="friendslist">
            <div className="friendslist__centercontainer">
                <span>Friends</span>
                <List />
            </div>
        </section>
    );
};

export default FriendsList;