import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/DB/db";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/db" exact component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
