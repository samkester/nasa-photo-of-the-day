//     ImageBox - props: src, media type, title

import React from "react";

export default function(props){
    const {src, media_type, title} = props;

    return(
        <div className="image-box">
            {
                !src ?
                <p>No image loaded, please wait.</p>: // src = blank or undefined
                media_type !== "image" ?
                <p>Cannot load this item. Please select a different date.</p> : // not an image
                <img src={src} alt={title} />
            }
        </div>
    );
}