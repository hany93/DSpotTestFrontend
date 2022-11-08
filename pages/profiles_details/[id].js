import React, { useState, useEffect } from "react";
import CardInfo from "../../components/card/card_info";
import CardPhotos from "../../components/card/card_photos";
import ButtonBack from "../../components/button/button_back";
import Modal from "../../components/modal";
import ProfileDetail from "../../components/profile_detail";
import Tabs from "../../components/tab";
import { useRouter } from 'next/router';
import {
    getProfileById
} from "../../api";

const ProfilesDetails = () => {
    const [selectedCard, setSelectedCard] = useState('Info'),
        { query } = useRouter(),
        [profile, setProfile] = useState(query),
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
                    return <CardInfo profile={profile} />;
                case 'Photos':
                    return <CardPhotos openModal={openModal} profile={profile} />;

                default:
                    break;
            }
        },
        getProfileDetails = async () => {
            let aux = await getProfileById(query.id);
            setProfile(aux["data"]);
            if (typeof window !== 'undefined')
                localStorage.setItem('profile', JSON.stringify(query));
        };


        
    useEffect(() => {
        getProfileDetails();
    }, []);



    return (
        <section className="profiles_details">
            <ButtonBack />
            <div className="profiles_details__centercontainer">
                <ProfileDetail profile={profile} />
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