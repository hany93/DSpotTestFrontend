const useButtonClose = () => {
    /**Method to close modal */
    const closeModal = () => {
        /**Enable Scroll*/
        document.body.style.overflow = "auto";

        /**Get the modal */
        let modal = document.getElementById("modal_image");
        modal.style.display = "none";
    };

    return { closeModal }
}

export default useButtonClose
