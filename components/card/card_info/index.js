/**Imports */
import React from "react";
import BasicInfo from "@components/utils/basic_info";
import Label from "@components/utils/label";
import Line from "@components/utils/line";
import Text from "@components/utils/text";

const CardInfo = (props) => {
    return (
        /**Component to show information card */
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
            <BasicInfo profile={props.profile} />
        </div>
    );
};

export default CardInfo;