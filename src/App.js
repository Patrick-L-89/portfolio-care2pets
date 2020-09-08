import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/About/About";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
