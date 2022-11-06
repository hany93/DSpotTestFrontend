import React from "react";
import BasicInfo from "./basic_info";
import Label from "./label";
import Line from "./line";
import Text from "./text";

const CardInfo = () => {
    return (
        <div id='profiles_details_info__card' className="profiles_details_info__card">
            <div>
                <Label name='Bio' />
                <Text name="I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know." />
            </div>
            <Line />
            <div>
                <Label name='Phone' />
                <Text name='(820) 289-1818' />
            </div>
            <Line />
            <BasicInfo />
        </div>
    );
};

export default CardInfo;