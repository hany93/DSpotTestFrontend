import React from "react";

const ImageEllipseProfileList = (props) => {
    return (
        <div>
            <img src={props.image} />
            <span className="profileslist__ellipse" />
        </div>
    );
};

export default ImageEllipseProfileList;