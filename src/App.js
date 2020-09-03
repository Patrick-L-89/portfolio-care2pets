import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="container">
      <div className="first">
        <Navbar />
      </div>
      <div className="second">
        <div className="App">
          <Homepage />
        </div>
      </div>
    </div>
  );
}

export default App;
