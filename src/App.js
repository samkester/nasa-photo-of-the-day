import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ContentBox from "./components/ContentBox"
import DateButton from "./components/DateButton"

// App structure:
// App - state: target date, result of API call
//   ContentBox - prop: data from API call
//     ImageBox - props: src, media type
//   DateButton - props: target date, remaining API calls/hr or day

// API should call on load and when date to fetch changes

const initialAPI = {data: undefined, "X-RateLimit-Remaining": 40}; // dummy data to distribute before axios resolves

function App() {
  const [APIResponse, setAPIResponse] = useState(initialAPI);
  const [targetDate, setTargetDate] = useState(""); // format: YYYY-MM-DD

  return (
    <div className="App">
      <ContentBox data={APIResponse.data} />
      <DateButton targetDate={targetDate} setTargetDate={setTargetDate} remaining={APIResponse["X-RateLimit-Remaining"]} />
    </div>
  );
}

export default App;
