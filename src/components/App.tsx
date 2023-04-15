import React from "react";

import "./App.css";

import Copyright from "./Copyright";
import InputFields from "./InputFields";
import Logo from "./Logo";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="App-header"> Deal Analyzer </span>
      <Logo />
      <Copyright />
      <InputFields />
    </div>
  );
};

export default App;
