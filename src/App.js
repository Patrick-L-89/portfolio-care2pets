import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Nearbyvets from "./pages/NearbyVets/NearbyVets";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="first">
        <Navbar />
      </div>
      <div className="second">
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/nearbyvets">
              <Nearbyvets />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
