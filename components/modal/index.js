import React from "react";
import ButtonClose from "@components/button/button_close";

const Modal = () => {
    return (
        <div id="myModal" className="modal">
            <ButtonClose/>
            <img className="modal-content" id="img01" />
        </div>
    );
};

export default Modal;