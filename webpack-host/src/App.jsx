import React from "react";
import ReactDOM from "react-dom";

import ButtonModule from 'remoteApp/Button';
const Button = ButtonModule.Button;

import "./index.css";

const App = () => (
  <div className="container">
    <Button />
    <div>Name: webpack-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
