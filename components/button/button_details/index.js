import React from "react";
import Link from "next/link";

const ButtonDetails = (props) => {
    return (
        <button className="profileslist__button"><Link href={'/profiles_details/' + props.profile.id}>Details</Link></button>
    );
};

export default ButtonDetails;