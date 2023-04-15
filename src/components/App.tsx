import React from "react";

import "./App.css";

import Copyright from "./Copyright";
import InputFields from "./InputFields";
import Logo from "./Logo";
import Submit from "./Submit";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="App-header"> Deal Analyzer </span>
      <Logo />
      <InputFields />
      <Submit sx={{ mt: 5 }} />
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
};

export default App;
