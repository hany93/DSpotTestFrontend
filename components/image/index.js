import React from 'react'

export default function Image(props) {
    return (
        <img src={props.photo} className={props.class_image ? props.class_image : ''} />
    )
}
