/**Imports */
import React from "react";
import ButtonClose from "@components/button/button_close";

const Modal = () => {
    return (
        //Component to show a modal window with the photo that was selected enlarged
        <div id="modal_image" className="modal">
            <ButtonClose/>
            <img className="modal-content" id="img_enlarged" />
        </div>
    );
};

export default Modal;