import React, { useState } from "react";
import CardInfo from "../../components/card_info/card_info";
import CardPhotos from "../../components/card_photos";
import ButtonBack from "../../components/button_back";
import Modal from "../../components/modal";
import InfoPhotoProfileDetail from "../../components/infophoto_profile_detail/infophoto_profile_detail";
import Tabs from "../../components/tabs";

const ProfilesDetails = () => {
    const [selectedCard, setSelectedCard] = useState('Info'),
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
        handleCard = () => {
            switch (selectedCard) {
                case 'Info':
                    return <CardInfo />;
                case 'Photos':
                    return <CardPhotos openModal={openModal} />;

                default:
                    break;
            }
        };
    return (
        <section className="profiles_details">
            <ButtonBack />
            <div className="profiles_details__centercontainer">
                <InfoPhotoProfileDetail />
                <div className="profiles_details__tab">
                    <Tabs selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                    {handleCard()}
                </div>
            </div>
            <Modal />
        </section>
    );
};

export default ProfilesDetails;