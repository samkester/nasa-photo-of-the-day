//   ContentBox - prop: data from API call
//     ImageBox - props: src, media type, title

import React from "react";
import ImageBox from "./ImageBox";
import styled from "styled-components";

const StyledContentBox = styled.div`
    width: 90%;
    max-width: 600px;
    margin: ${props => props.theme.componentMargin};
    color: ${props => props.theme.mainColor};
    background: ${props => props.theme.backgroundColor};
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: ${props => props.theme.componentCorners};
    overflow: hidden;
    ${props => props.theme.flexCenter}

    h2{
        padding: ${props => props.theme.componentMargin};
        color: ${props => props.theme.highlightColor};
        background:${props => props.theme.highlightBackground};
        width: 100%;
        text-align: center;
    }

    div.content-row{
        ${props => props.theme.flexCenter}
        width: 100%;
        padding: ${props => props.theme.componentMargin};
    }
    div.left{
        justify-content: flex-start;
        text-align: left;
    }
    div.split{
        justify-content: space-between;
    }
    /*div.center{

    }*/
    div.smaller{
        font-size: 0.8rem;
        line-height: 1.4;
    }

    a,a:visited{
        color:${props => props.theme.highlightColor};
        background:${props => props.theme.highlightBackground};
        border: 1px solid currentColor;
        padding: ${props => props.theme.componentMargin};
        border-radius: ${props => props.theme.componentCorners};
    }
`;

export default function ContentBox(props){
    const {data} = props;

    return (
        <StyledContentBox>
            <h2>{data.title}</h2>
            <ImageBox src={data.url} media_type={data.media_type} title={data.title} />
            <div className="content-row left smaller">
                <p>{data.explanation}</p>
            </div>
            <div className="content-row split">
                <p>{data.date}</p>
                <p>{data.copyright}</p>
            </div>
            {data.hdurl && <div className="content-row center">
                <a href={data.hdurl} target="_blank" rel="noopener noreferrer">View higher-definition image.</a>
            </div>}
        </StyledContentBox>
    );
}