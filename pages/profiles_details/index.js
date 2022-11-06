import React, { useState } from "react";
import { useRouter } from "next/router";

const data = [
    {
        id: Math.random(),
        image: 'images/avatar.png',
        name: 'Haniyessi Rodriguez Hernandez',
        description: 'Take a look around you, everything is awesome',
        photos: [
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png"
        ]
    }
];
const ProfilesDetails = () => {
    const router = useRouter(),
        [selectedCard, setSelectedCard] = useState('Info'),
        goProfileList = () => {
            router.push("/");
        },
        openModal = (image) => {
            //Disable Scroll
            document.body.style.overflow = "hidden";

            // Get the modal
            let modal = document.getElementById("myModal");

            // Get the image and insert it inside the modal
            let modalImg = document.getElementById("img01");
            modal.style.display = "flex";
            modalImg.src = image;
        },

        closeModal = () => {
            //Enable Scroll
            document.body.style.overflow = "auto";

            // Get the modal
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
        },
        handleCard = () => {
            switch (selectedCard) {
                case 'Info':
                    return (<div id='profiles_details_info__card' className="profiles_details_info__card">
                        <div>
                            <span className="profiles_details_info__card__label">Bio:</span>
                            <span className="profiles_details_info__card__text">I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.</span>
                        </div>
                        <span className="profiles_details_info__card__line" />
                        <div>
                            <span className="profiles_details_info__card__label">Phone:</span>
                            <span className="profiles_details_info__card__text">(820) 289-1818</span>
                        </div>
                        <span className="profiles_details_info__card__line" />
                        <div className="profiles_details_info__card__basicInfo">
                            <div>
                                <span className="profiles_details_info__card__label">Address:</span>
                                <span className="profiles_details_info__card__text">5190 Center Court Drive</span>
                            </div>
                            <div>
                                <span className="profiles_details_info__card__label">City:</span>
                                <span className="profiles_details_info__card__text">Spring</span>
                            </div>
                            <div>
                                <span className="profiles_details_info__card__label">State:</span>
                                <span className="profiles_details_info__card__text">TX</span>
                            </div>
                            <div>
                                <span className="profiles_details_info__card__label">Zipcode:</span>
                                <span className="profiles_details_info__card__text">77370</span>
                            </div>
                        </div>
                    </div>);
                case 'Photos':
                    return (<div id='profiles_details_photos__card' className="profiles_details_photos__card">
                        {data[0]['photos'].map((item) => {
                            return (
                                <div key={Math.random()} className="profiles_details__imagecard" onClick={() => openModal(item)}>
                                    <img src={item} />
                                </div>
                            )
                        })}
                    </div>);

                default:
                    break;
            }
        };
    return (
        <section className="profiles_details">
            <div>
                <div className="profiles_details__back" onClick={() => goProfileList()}>
                    <img src="images/arrow_back.png" />
                </div>
            </div>
            <div className="profiles_details__centercontainer">
                <div className="profiles_details__infoavatar">
                    <div>
                        <img src="images/avatar__150.png" className="profiles_details__image" />
                        <span className="profiles_details__ellipse" />
                    </div>
                    <div className="profiles_details__elementsgrouping">
                        <span>Steph Walters</span>
                        <div>
                            <span>At Work</span>
                        </div>
                    </div>
                </div>
                <div className="profiles_details__tab">
                    <ul>
                        <li onClick={() => setSelectedCard('Info')} className={selectedCard === 'Info' ? "active" : ""}>Info</li>
                        <li onClick={() => setSelectedCard('Photos')} className={selectedCard === 'Photos' ? "active" : ""}>Photos</li>
                    </ul>
                    {handleCard()}
                </div>
            </div>
            <div id="myModal" className="modal">
                <span className="close" onClick={() => closeModal()}><img src="images/close.png" /></span>
                <img className="modal-content" id="img01" />
            </div>
        </section>
    );
};

export default ProfilesDetails;