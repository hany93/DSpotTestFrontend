import React from "react";
import ElementsGrouping from "./elements_grouping";
import ImageEllipse from "./image_ellipse";

const InfoPhotoProfileDetail = () => {
    return (
        <div className="profiles_details__infoavatar">
            <ImageEllipse />
            <ElementsGrouping />
        </div>
    );
};

export default InfoPhotoProfileDetail;