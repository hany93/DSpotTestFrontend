import React from "react";

const ImageEllipse = (props) => {
    return (
        <div>
            <img src={props.profile.photo} className="profiles_details__image" />
            <span className={props.profile.available ? "profiles_details__ellipse" : "profiles_details__ellipse_not_available"} />
        </div>
    );
};

export default ImageEllipse;