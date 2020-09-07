import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chatroom from "./components/Chatroom/Chatroom";

function App() {
  return (
    <div className="container">
      <div className="first">
        <Navbar />
      </div>
      <div className="second">
        <div className="App">
          <Router>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/join" component={Join}></Route>
            <Route path="/chatroom" component={Chatroom}></Route>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
