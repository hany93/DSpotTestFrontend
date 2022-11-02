import React from "react";

const FriendsList = () => {
    return (
        <section className="friends_details_info">
            <div>
                <div className="friends_details_info__back">
                    <img src="images/arrow_back.png" />
                </div>
            </div>
            <div className="friends_details_info__centercontainer">
                <div>
                    <div>
                        <img src="images/avatar__150.png" className="friends_details_info__image" />
                        <span className="friends_details_info__ellipse" />
                    </div>
                    <div className="friends_details_info__elementsgrouping">
                        <span>Steph Walters</span>
                        <div>
                            <span>At Work</span>
                        </div>
                    </div>
                </div>
                <ul>
                    <li id="info"><a href='#'>Info</a></li>
                    <li id="photos"><a href='#'>Photos</a></li>
                </ul>
                <div className="friends_details_info__card">
                </div>
            </div>
        </section>
    );
};

export default FriendsList;