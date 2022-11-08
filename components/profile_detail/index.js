import React, { useState } from "react";
import ElementsGrouping from "../element_grouping";
import Images from "../image";
import Ellipse from "../ellipse";
import Tabs from "../tab";
import CardInfo from "../card/card_info";
import CardPhotos from "../card/card_photos";

const ProfileDetail = (props) => {
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