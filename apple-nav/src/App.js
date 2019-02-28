import React, { Component } from "react";
import { Route } from "react-router-dom";
import navdata from "./nav_data/navdata";
import NavWrapper from "./components/NavWrapper";
// import Nav from "./components/Nav";
// import SubNav from "./components/SubNav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navdata: []
    };
  }

  componentDidMount() {
    this.setState({
      navdata: navdata
    });
  }

  render() {
    console.log(this.state.navdata);
    return (
      <Route
        path="/"
        render={routeProps => (
          <NavWrapper {...routeProps} navdata={this.state.navdata} />
        )}
      />
    );
  }
}

export default App;
