import Main from "./Comp/Main";
import Header from "./Comp/Header";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
