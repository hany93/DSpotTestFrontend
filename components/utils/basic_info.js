/**Imports */
import React from "react";
import Label from "./label";
import Text from "./text";

const BasicInfo = (props) => {
    return (
        // Basic information about the selected profile
        <div className="profiles_details_info__card__basicInfo">
            <div>
                <Label name='Address' />
                <Text name={props.profile.address} />
            </div>
            <div>
                <Label name='City' />
                <Text name={props.profile.city} />
            </div>
            <div>
                <Label name='State' />
                <Text name={props.profile.state} />
            </div>
            <div>
                <Label name='Zipcode' />
                <Text name={props.profile.zipcode} />
            </div>
        </div>
    );
};

export default BasicInfo;