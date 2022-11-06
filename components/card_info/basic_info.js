import React from "react";
import Label from "./label";
import Text from "./text";

const BasicInfo = () => {
    return (
        <div className="profiles_details_info__card__basicInfo">
            <div>
                <Label name='Address' />
                <Text name='5190 Center Court Drive' />
            </div>
            <div>
                <Label name='City' />
                <Text name='Spring' />
            </div>
            <div>
                <Label name='State' />
                <Text name='TX' />
            </div>
            <div>
                <Label name='Zipcode' />
                <Text name='77370' />
            </div>
        </div>
    );
};

export default BasicInfo;