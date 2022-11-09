/**Imports */
import React from "react";
import ElementsGrouping from "@components/element_grouping";
import Images from "@components/image";
import Ellipse from "@components/ellipse";
import Tabs from "@components/tab";
import useProfileDetails from "@hook/useProfileDetails";
import CardInfo from "@components/card/card_info";
import CardPhotos from "@components/card/card_photos";

const ProfileDetail = (props) => {
    const { selectedCard, setSelectedCard, openModal } = useProfileDetails(),
        /**Method to display info cards and photos  */
        handleCard = () => {
            switch (selectedCard) {
                case 'Info':
                    /**Info card */
                    return <CardInfo profile={props.profile} />;
                case 'Photos':
                    /**Photos card */
                    return <CardPhotos openModal={openModal} profile={props.profile} />;

                default:
                    break;
            }
        };
    return (
        /**Component to show profile details */
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