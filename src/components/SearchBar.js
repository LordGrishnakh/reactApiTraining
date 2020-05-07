import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <div>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            ></input>
          </div>
        </form>
        <h2>{this.state.term}</h2>
      </div>
    );
  }
}

export default SearchBar;
