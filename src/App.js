import React from "react";
import Main from "./pages/index";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import ChoosePlan from "./pages/ChoosePlan";
import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route path="/choose-plan" component={ChoosePlan} />
    </Switch>
  );
}

export default App;
