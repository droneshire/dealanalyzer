import React from "react";

import "./App.css";

import Copyright from "./Copyright";
import DealInput from "./DealInput";
import Logo from "./Logo";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="App-header"> Deal Analyzer </span>
      <Logo />
      <DealInput />
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
};

export default App;
