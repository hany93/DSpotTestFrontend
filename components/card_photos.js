import React from "react";

const CardPhotos = (props) => {
    console.log(props.profile.images)
    return (
        <div id='profiles_details_photos__card' className="profiles_details_photos__card">
            {props.profile.images.map((item) => {
                return (
                    <div key={Math.random()} className="profiles_details__imagecard" onClick={() => props.openModal(item)}>
                        <img src={item} />
                    </div>
                )
            })}
        </div>
    );
};

export default CardPhotos;