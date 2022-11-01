import React from "react";
import { useRouter } from "next/router";

const List = () => {
    const router = useRouter();
    const data = [
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Haniyessi Rodriguez Hernandez',
            description: 'Take a look around you, everything is awesome'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: '"Developing something amazing'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        },
        {
            id: Math.random(),
            image: 'images/avatar.png',
            name: 'Steps Walters',
            description: 'At Work'
        }
    ]  
    const goDetails = () => {
        router.push("/friends_details_info");
    }
    return (
        <div className="friendslist__list">
            {data.map((item) => {
                return (
                    <div key={item.id} className="friendslist__card">
                        <div>
                            <div>
                                <img src={item.image} className="friendslist__image" />
                                <span className="friendslist__ellipse" />
                            </div>
                            <div className="friendslist__elementsgrouping">
                                <span>{item.name}</span>
                                <div>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => goDetails()} className="friendslist__button">Details</button>
                    </div>
                )
            })}
        </div>
    );
};

export default List;