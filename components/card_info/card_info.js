import React from "react";
import BasicInfo from "./basic_info";
import Label from "./label";
import Line from "./line";
import Text from "./text";

const CardInfo = (props) => {
    return (
        <div id='profiles_details_info__card' className="profiles_details_info__card">
            <div>
                <Label name='Bio' />
                <Text name={props.profile.bio} />
            </div>
            <Line />
            <div>
                <Label name='Phone' />
                <Text name={props.profile.phone} />
            </div>
            <Line />
            <BasicInfo profile={props.profile}/>
        </div>
    );
};

export default CardInfo;