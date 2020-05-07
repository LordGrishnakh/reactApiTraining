import React, { Component } from "react";
import unsplash from "./api/unsplash";

import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import "./App.css";

class App extends Component {
  state = {
    images: [],
  };

  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        Rogi was here
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
