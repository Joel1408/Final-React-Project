import React, { useState } from "react";
import "./App.css";
import Wordcounter from "./Wordcounter";

//Parent
export default function App() {
  return (
    <div className="App">
      {/* <div
        className="App_container"
        style={{ background: `${uiColour}` }}
      ></div> */}
      <Wordcounter />
    </div>
  );
}
