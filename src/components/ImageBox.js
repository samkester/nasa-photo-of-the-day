//     ImageBox - props: src, media type, title

import React from "react";
import styled from "styled-components";

const StyledImageBox = styled.div`
    font-size: 2rem;
    width: 100%;
    ${props => props.theme.flexCenter}
    margin-bottom: 1%;
    /*border-radius: ${props => props.theme.componentCorners};
    overflow: hidden;*/
    
    img{
        width: 100%;
    }
`

export default function(props){
    const {src, media_type, title} = props;

    return(
        <StyledImageBox>
            {
                !src ?
                <p>No image loaded, please wait.</p>: // src = blank or undefined
                media_type !== "image" ?
                <p>Cannot load this item. Please select a different date.</p> : // not an image
                <img src={src} alt={title} />
            }
        </StyledImageBox>
    );
}