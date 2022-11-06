import React from "react";

const ElementsGroupingProfileList = (props) => {
    return (
        <div className="profileslist__elementsgrouping">
            <span>{props.name}</span>
            <div>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

export default ElementsGroupingProfileList;