import React from "react";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< Updated upstream
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chatroom from "./components/Chatroom/Chatroom";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
