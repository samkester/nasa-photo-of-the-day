//   DateButton - props: setTargetDate(), remaining API calls/hr or day

import React from "react";

export default function(props){
    const {setTargetDate/*, remaining*/} = props;

    const wrappedSetTargetDate = (event) => {
        setTargetDate(event.currentTarget.previousSibling.value);
    }

    return(
        <div className="date-button-box">
            {/*remaining <= 0 && <p>Reached API limit, try again later.</p>*/}
            <input type="text"
                placeholder="Enter a date in YYYY-MM-DD format">
            </input>
            <button onClick={wrappedSetTargetDate}>Load</button>
        </div>
    );
}