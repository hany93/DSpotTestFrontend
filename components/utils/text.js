/**Imports */
import React from "react";

const Text = (props) => {
    return (
        /**Component to show label text*/
        <span className="profiles_details_info__card__text">{props.name}</span>
    );
};

export default Text;