import React from "react";
import ElementsGrouping from "../element_grouping";
import Image from "../image";
import Ellipse from "../ellipse";

const ProfileDetail = (props) => {
    return (
        <div className="profiles_details__infoavatar">
            <div>
                <Image photo={props.profile.photo} class_image="profiles_details__image" />
                <Ellipse class_ellipse={props.profile.available ? "profiles_details__ellipse" : "profiles_details__ellipse_not_available"} />
            </div>
            <ElementsGrouping class_elementsgrouping='profiles_details__elementsgrouping' name={props.profile.first_name + ' ' + props.profile.last_name} description={props.profile.textStatus} />
        </div>
    );
};

export default ProfileDetail;