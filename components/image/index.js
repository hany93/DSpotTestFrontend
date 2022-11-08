import React from 'react'
import Image from 'next/image'

const Images = (props) => {
    return (
        <Image alt="Photo" src={props.photo} className={props.class_image ? props.class_image : ''} width={props.width && props.width} height={props.height && props.height} />
    )
}

export default Images;
