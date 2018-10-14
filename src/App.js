import React, { Component } from 'react';
import 'normalize.css';
import "./style.css";

import MainRouter from "./main-router";

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <MainRouter />
      </div>
    );
  }
}

export default App;
