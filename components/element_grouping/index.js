/**Imports */
import React from 'react'

const ElementsGrouping = (props) => {
    return (
        /**Component to show name and status description of profile*/
        <div className={props.class_elementsgrouping}>
            <span>{props.name}</span>
            <div>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default ElementsGrouping;
