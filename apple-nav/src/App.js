import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavData from "./nav_data/NavData";
import NavWrapper from "./components/NavWrapper";
// import Nav from "./components/Nav";
// import SubNav from "./components/SubNav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      NavData: []
    };
  }

  componentDidMount() {
    this.setState({
      NavData: NavData
    });
  }

  render() {
    console.log(this.state.NavData);
    return (
      <Route
        path="/"
        render={routeProps => (
          <NavWrapper {...routeProps} NavData={this.state.NavData} />
        )}
      />
    );
  }
}

export default App;
