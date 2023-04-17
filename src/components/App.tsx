import React from "react";

import "./App.css";

import Copyright from "./Copyright";
import DealInput from "./DealInput";
import Logo from "./Logo";
import ResponsiveDrawer from "./Dashboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <ResponsiveDrawer />
    </div>
  );
};

export default App;
