import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ContentBox from "./components/ContentBox";
import DateButton from "./components/DateButton";

// App structure:
// App - state: target date, result of API call
//   ContentBox - prop: data from API call
//     ImageBox - props: src, media type, title
//   DateButton - props: setTargetDate(), remaining API calls/hr or day
//                                        ^ ignore this, this header is not obtainable from the response

// API should call on load and when date to fetch changes

const USE_TEST_DATA = true; // for testing
const testData = {"copyright":"Ignacio Llorens","date":"2020-08-12","explanation":"Keep your eye on the ion tail of Comet NEOWISE.  A tale of this tail is the trail of the Earth. As with all comets, the blue ion tail always points away from the Sun. But as Comet C/2020 F3 (NEOWISE) rounded our Sun, its ion tail pointed in slightly different directions. This is because between 2020 July 17 and July 25 when the featured images were taken, the Earth moved noticeably in its orbit around the Sun. But the Earth's motion made the Sun appear to shift in the sky. So even though you can't see the Sun directly in the featured image(s), the directions of the ion tails reveal this apparent solar shift. The Sun's apparent motion is in the ecliptic, the common plane where all planets orbit.  The featured five image composite was meticulously composed to accurately place each comet image -- and the five extrapolated solar positions -- on a single foreground image of Tur\u00f3 de l'Home Mountain, north of Barcelona, Spain Comet NEOWISE is no longer the impressive naked-eye object it was last month, but it can still be found with a small telescope as it heads back to the outer Solar System.","hdurl":"https://apod.nasa.gov/apod/image/2008/NeowiseSequence_Llorens_3044_annotated.jpg","media_type":"image","service_version":"v1","title":"The Shifting Tails of Comet NEOWISE","url":"https://apod.nasa.gov/apod/image/2008/NeowiseSequence_Llorens_960_annotated.jpg"};
//const initialAPI = {data: testData, /*"X-RateLimit-Remaining": 40*/}; // dummy data to distribute before axios resolves*/

function App() {
  const [APIResponse, setAPIResponse] = useState({data: {}});
  const [targetDate, setTargetDate] = useState(""); // format: YYYY-MM-DD

  useEffect(() => {
    if(USE_TEST_DATA){
      setAPIResponse({data: testData});
      return;
    }

    // if there is no date set (default), query with no date
    if(targetDate === ""){ // slight problem with this API
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {setAPIResponse(response); console.log(response);})
      .catch(error => console.log(error));
    }
    else
    // if there is a date set, query that date
    {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${targetDate}`)
      .then(response => {setAPIResponse(response); console.log(response);})
      .catch(error => console.log(error));
    }
  },[targetDate]);

  return (
    <div className="App">
      <ContentBox data={APIResponse.data} />
      <DateButton setTargetDate={setTargetDate} />
    </div>
  );
}

export default App;
