import React from "react";
import { useRouter } from "next/router";
import ImageEllipseProfileList from "./image_ellipse_profile_list";
import ElementsGroupingProfileList from "./elements_grouping_profile_list";
import ButtonDetails from "./button_details";

const List = () => {
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
    ];
    return (
        <div className="profileslist__list">
            {data.map((item) => {
                return (
                    <div key={item.id} className="profileslist__card">
                        <div>
                            <ImageEllipseProfileList image={item.image} />
                            <ElementsGroupingProfileList name={item.name} description={item.description} />
                        </div>
                        <ButtonDetails />
                    </div>
                )
            })}
        </div>
    );
};

export default List;