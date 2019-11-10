import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Data } from "./Data.js";
import { Signinup } from "./Signinup.js";
import { Security } from "./Security.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Signinup} />
            <Security exact path="/data" component={Data} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
