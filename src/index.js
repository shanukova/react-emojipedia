import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

ReactDOM.render(<App />, document.getElementById("root"));

// Exercises

let x = emojipedia.map(x => x.meaning.substring(0, 100));
console.log(x);
