import React from "react";
import { useRouter } from "next/router";

const FriendsDetailsPhotos = () => {
    const router = useRouter();
    const goFriendList = () => {
        router.push("/");
    }
    const data = [
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Haniyessi Rodriguez Hernandez',
            description: 'Take a look around you, everything is awesome',
            photos: [
                "https://flic.kr/p/mxHVJu",
                "https://flic.kr/p/nCJyXN",
                "https://flic.kr/p/mxwwsv"
            ]
        }
    ]
    return (
        <section className="friends_details">
            <div>
                <div className="friends_details__back" onClick={() => goFriendList()}>
                    <img src="images/arrow_back.png" />
                </div>
            </div>
            <div className="friends_details__centercontainer">
                <div className="friends_details__infoavatar">
                    <div>
                        <img src="images/avatar__150.png" className="friends_details__image" />
                        <span className="friends_details__ellipse" />
                    </div>
                    <div className="friends_details__elementsgrouping">
                        <span>Steph Walters</span>
                        <div>
                            <span>At Work</span>
                        </div>
                    </div>
                </div>
                <div className="friends_details__tab">
                    <ul>
                        <li id="info"><a href='#'>Info</a></li>
                        <li id="photos"><a href='#'>Photos</a></li>
                    </ul>
                    <div className="friends_details_photos__card">
                        {data[0]['photos'].map((item) => {
                            return (
                                <div key={Math.random()} className="friends_details__image friends_details__imagecard">
                                    <img src={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FriendsDetailsPhotos;