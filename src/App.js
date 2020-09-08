import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/About/About";
import Join from "./pages/Chat-app/Join/Join";
import Chatroom from "./pages/Chat-app/Chatroom/Chatroom";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/joinchat" component={Join} />
          <Route path="/chatroom" component={Chatroom}></Route>
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
