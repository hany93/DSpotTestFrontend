import React from "react";
import { useRouter } from "next/router";

const data = [
    {
        id: Math.random(),
        image: 'images/avatar.png',
        name: 'Haniyessi Rodriguez Hernandez',
        description: 'Take a look around you, everything is awesome',
        photos: [
            "images/imgCard1.png",
            "images/imgCard2.png",
            "images/imgCard3.png",
            "images/imgCard4.png",
            "images/imgCard5.png",
            "images/imgCard5.png",
            "images/imgCard5.png",
            "images/imgCard5.png",
            "images/imgCard5.png",
            "images/imgCard5.png"
        ]
    }
];

const FriendsDetailsInfo = () => {
    const router = useRouter();
    const goFriendList = () => {
        router.push("/");
    }
    const openModal = (image) => {
        //Disable Scroll
        document.body.style.overflow = "hidden";

        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal
        let modalImg = document.getElementById("img01");
        modal.style.display = "flex";
        modalImg.src = image;
    };

    const closeModal = () => {
        //Enable Scroll
        document.body.style.overflow = "auto";
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    const showCardInfo = () => {
        let cardInfo = document.getElementsByClassName("friends_details_info__card");
        let cardPhotos = document.getElementsByClassName("friends_details_photos__card");
        cardInfo.style.display = 'flex';
        cardPhotos.style.display = 'none';
    }
    const showCardPhotos = () => {
        let cardInfo = document.getElementsByClassName("friends_details_info__card");
        let cardPhotos = document.getElementsByClassName("friends_details_photos__card");
        cardInfo.style.display = 'none';
        cardPhotos.style.display = 'flex';
    }
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
                        <li id="info" onClick={() => showCardInfo()}><a href='#'>Info</a></li>
                        <li id="photos" onClick={() => showCardPhotos()}><a href='#'>Photos</a></li>
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
                    <div className="friends_details_photos__card">
                        {data[0]['photos'].map((item) => {
                            return (
                                <div key={Math.random()} className="friends_details__imagecard" onClick={() => openModal(item)}>
                                    <img src={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div id="myModal" className="modal">
                <span className="close" onClick={() => closeModal()}><img src="images/close.png" /></span>
                <img className="modal-content" id="img01" />
            </div>
        </section>
    );
};

export default FriendsDetailsInfo;