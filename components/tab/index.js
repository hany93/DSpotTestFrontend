import React from "react";

const Tabs = (props) => {
    return (
        <ul>
            <li onClick={() => props.setSelectedCard('Info')} className={props.selectedCard === 'Info' ? "active" : ""}>Info</li>
            <li onClick={() => props.setSelectedCard('Photos')} className={props.selectedCard === 'Photos' ? "active" : ""}>Photos</li>
        </ul>
    );
};

export default Tabs;