import React from "react";

const data = [
    {
        id: Math.random(),
        image: 'images/avatar.png',
        name: 'Haniyessi Rodriguez Hernandez',
        description: 'Take a look around you, everything is awesome',
        photos: [
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png",
            "images/a.png"
        ]
    }
];

const CardPhotos = (props) => {
    return (
        <div id='profiles_details_photos__card' className="profiles_details_photos__card">
            {data[0]['photos'].map((item) => {
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