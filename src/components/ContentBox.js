//   ContentBox - prop: data from API call
//     ImageBox - props: src, media type, title

import React from "react";
import ImageBox from "./ImageBox";

export default function ContentBox(props){
    const {data} = props;

    return (
        <div className="content-box">
            <h2>{data.title}</h2>
            <ImageBox src={data.url} media_type={data.media_type} title={data.title} />
            <div className="content-row left">
                <p>{data.explanation}</p>
            </div>
            <div className="content-row split">
                <p>{data.copyright}</p>
                <p>{data.date}</p>
            </div>
            {data.hdurl && <div className="content-row center">
                <a href={data.hdurl} target="_blank" rel="noopener noreferrer">View higher-definition image.</a>
            </div>}
        </div>
    );
}