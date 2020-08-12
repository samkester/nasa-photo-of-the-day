import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ContentBox from "./components/ContentBox"
import DateButton from "./components/DateButton"

// App structure:
// App - state: date to fetch, result of API call
//   ContentBox - prop: data from API call
//     ImageBox - props: src, media type
//   DateButton - props: date to fetch, remaining API calls/hr or day

// API should call on load and when date to fetch changes

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
