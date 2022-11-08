import React from 'react'

export default function ElementsGrouping(props) {
    return (
        <div className={props.class_elementsgrouping}>
            <span>{props.name}</span>
            <div>
                <span>{props.description}</span>
            </div>
        </div>
    )
}
