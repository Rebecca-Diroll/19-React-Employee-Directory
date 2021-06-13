import React from "react";
import Card from "./components/Card";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Card} />
    </Router>
  );
}

export default App;
