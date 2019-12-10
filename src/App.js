import React from "react";
import Main from "./pages/index";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import ChoosePlan from "./pages/ChoosePlan";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/choose-plan" component={ChoosePlan} />
    </Switch>
  );
}

export default App;
