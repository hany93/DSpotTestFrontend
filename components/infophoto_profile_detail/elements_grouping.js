import React from "react";

const ElementsGrouping = (props) => {
    return (
        <div className="profiles_details__elementsgrouping">
            <span>{props.profile.first_name + ' ' + props.profile.last_name}</span>
            <div>
                <span>{props.profile.textStatus}</span>
            </div>
        </div>
    );
};

export default ElementsGrouping;