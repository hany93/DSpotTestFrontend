import React from 'react'

const ElementsGrouping = (props) => {
    return (
        <div className={props.class_elementsgrouping}>
            <span>{props.name}</span>
            <div>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default ElementsGrouping;
