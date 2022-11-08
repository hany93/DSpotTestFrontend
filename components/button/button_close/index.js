import React from "react";
import Images from "@components/image";
import close from '@public/images/close.png'

const ButtonBack = () => {
    const closeModal = () => {
        //Enable Scroll
        document.body.style.overflow = "auto";

        // Get the modal
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    };
    return (
        <span className="close" onClick={() => closeModal()}><Images photo={close} /></span>
    );
};

export default ButtonBack;