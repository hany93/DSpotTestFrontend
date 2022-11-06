import React from "react";

const Modal = () => {
    const closeModal = () => {
        //Enable Scroll
        document.body.style.overflow = "auto";

        // Get the modal
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    };
    return (
        <div id="myModal" className="modal">
            <span className="close" onClick={() => closeModal()}><img src="images/close.png" /></span>
            <img className="modal-content" id="img01" />
        </div>
    );
};

export default Modal;