import React from "react";

import "./App.css";

import Copyright from "./Copyright";
import InputDashboard from "./InputDashboard";
import Logo from "./Logo";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="App-header"> Deal Analyzer </span>
      <Logo />
      <InputDashboard />
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
};

export default App;
