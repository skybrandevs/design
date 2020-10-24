import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
         </Switch>
    </Router>
  );
}

export default App;
