import React from "react";

const ImageEllipseProfileList = (props) => {
    return (
        <div>
            <img src={props.profile.photo} />
            <span className={props.profile.available ? "profileslist__ellipse" : "profileslist__ellipse_not_available"} />
        </div>
    );
};

export default ImageEllipseProfileList;