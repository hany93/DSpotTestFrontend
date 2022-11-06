import React from "react";
import { useRouter } from "next/router";

const ButtonDetails = () => {
    const router = useRouter(),
        goDetails = () => {
            router.push("/profiles_details");
        };
    return (
        <button onClick={() => goDetails()} className="profileslist__button">Details</button>
    );
};

export default ButtonDetails;