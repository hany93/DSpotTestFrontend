import React from "react";

const List = () => {
    const data = [
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
                        <button className="friendslist__button">Details</button>
                    </div>
                )
            })}
        </div>
    );
};

export default List;