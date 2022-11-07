import React from "react";
import ElementsGrouping from "./elements_grouping";
import ImageEllipse from "./image_ellipse";

const InfoPhotoProfileDetail = (props) => {
    return (
        <div className="profiles_details__infoavatar">
            <ImageEllipse profile={props.profile} />
            <ElementsGrouping profile={props.profile} />
        </div>
    );
};

export default InfoPhotoProfileDetail;