/**Imports */
import React, { useState } from "react";
import ElementsGrouping from "@components/element_grouping";
import Images from "@components/image";
import Ellipse from "@components/ellipse";
import Tabs from "@components/tab";
import CardInfo from "@components/card/card_info";
import CardPhotos from "@components/card/card_photos";

const ProfileDetail = (props) => {
    const [selectedCard, setSelectedCard] = useState('Info'),
        openModal = (image) => {
            //Disable Scroll
            document.body.style.overflow = "hidden";

            // Get the modal
            let modal = document.getElementById("modal_image");

            // Get the image and insert it inside the modal
            let modalImg = document.getElementById("img_enlarged");
            modal.style.display = "flex";
            modalImg.src = image;
        },
        handleCard = () => {
            switch (selectedCard) {
                case 'Info':
                    return <CardInfo profile={props.profile} />;
                case 'Photos':
                    return <CardPhotos openModal={openModal} profile={props.profile} />;

                default:
                    break;
            }
        };
    return (
        <>
            <div className="profiles_details__infoavatar">
                <div>
                    <Images photo={props.profile.photo} class_image="profiles_details__image" width={150} height={150} />
                    <Ellipse class_ellipse={props.profile.available ? "profiles_details__ellipse" : "profiles_details__ellipse_not_available"} />
                </div>
                <ElementsGrouping class_elementsgrouping='profiles_details__elementsgrouping' name={props.profile.first_name + ' ' + props.profile.last_name} description={props.profile.textStatus} />
            </div>
            <div className="profiles_details__tab">
                <Tabs selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                {handleCard()}
            </div>
        </>
    );
};

export default ProfileDetail;