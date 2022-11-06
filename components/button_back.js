import React from "react";
import { useRouter } from "next/router";

const ButtonBack = () => {
    const router = useRouter(),
        goProfileList = () => {
            router.push("/");
        };
    return (
        <div>
            <div className="profiles_details__back" onClick={() => goProfileList()}>
                <img src="images/arrow_back.png" />
            </div>
        </div>
    );
};

export default ButtonBack;