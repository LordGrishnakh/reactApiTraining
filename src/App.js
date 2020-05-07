import React, { Component } from "react";
import SearchBar from './SearchBar';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        Rogi was here
        <SearchBar />
      </div>
    );
  }
}

export default App;
