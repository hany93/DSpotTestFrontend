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
                <div className="friends_details_info__infoavatar">
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
                <div className="friends_details_info__tab">
                    <ul>
                        <li id="info"><a href='#'>Info</a></li>
                        <li id="photos"><a href='#'>Photos</a></li>
                    </ul>
                    <div className="friends_details_info__card">
                        <div>
                            <span className="friends_details_info__card__label">Bio:</span>
                            <span className="friends_details_info__card__text">I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.</span>
                        </div>
                        <span className="friends_details_info__card__line" />
                        <div>
                            <span className="friends_details_info__card__label">Phone:</span>
                            <span className="friends_details_info__card__text">(820) 289-1818</span>
                        </div>
                        <span className="friends_details_info__card__line" />
                        <div>
                            <span className="friends_details_info__card__label">Address:</span>
                            <span className="friends_details_info__card__text">5190 Center Court Drive</span>
                        </div>
                        <div>
                            <span className="friends_details_info__card__label">City:</span>
                            <span className="friends_details_info__card__text">Spring</span>
                        </div>
                        <div>
                            <span className="friends_details_info__card__label">State:</span>
                            <span className="friends_details_info__card__text">TX</span>
                        </div>
                        <div>
                            <span className="friends_details_info__card__label">Zipcode:</span>
                            <span className="friends_details_info__card__text">77370</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FriendsList;