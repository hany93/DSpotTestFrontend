import React, { useState, useEffect } from "react";
import CardInfo from "../../components/card_info/card_info";
import CardPhotos from "../../components/card_photos";
import ButtonBack from "../../components/button_back";
import Modal from "../../components/modal";
import InfoPhotoProfileDetail from "../../components/infophoto_profile_detail/infophoto_profile_detail";
import Tabs from "../../components/tabs";
import { useRouter } from 'next/router';
import {
    getProfileById
} from "../api/profiles";

const ProfilesDetails = (props) => {
    const [selectedCard, setSelectedCard] = useState('Info'),
        { query } = useRouter(),
        [profile, setProfile] = useState({}),
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
                    return <CardInfo profile={profile}/>;
                case 'Photos':
                    return <CardPhotos openModal={openModal} profile={profile}/>;

                default:
                    break;
            }
        },
        getProfileDetails = async () => {
            let profile = {}
            if (query) {
                profile = query;
                setProfile(query);
            } else {
                var aux = await getProfileById(query.id);
                setProfile(aux["data"]);
            }
        };

    useEffect(() => {
        getProfileDetails();
    }, []);
    return (
        <section className="profiles_details">
            <ButtonBack />
            <div className="profiles_details__centercontainer">
                <InfoPhotoProfileDetail profile={profile} />
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