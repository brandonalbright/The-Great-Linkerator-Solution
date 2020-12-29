import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import getLinks from "./components/api";

function App() {
  getLinks();
  return (
    <>
  <h1>HELLLLOOOO</h1>
  </>)
};

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("app")
);
