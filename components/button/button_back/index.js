import React from "react";
import { useRouter } from "next/router";
import Images from "@components/image";
import arrow_back from '@public/images/arrow_back.png'

const ButtonBack = () => {
    const router = useRouter(),
        goProfileList = () => {
            router.push("/");
        };
    return (
        <div>
            <div className="profiles_details__back" onClick={() => goProfileList()}>
                <Images photo={arrow_back} />
            </div>
        </div>
    );
};

export default ButtonBack;