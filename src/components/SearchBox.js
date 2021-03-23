import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: "",
    movies: "",
  };

  handleOnChange = (event) => {
    console.log("event", event.target.value);
    this.setState({
      searchTerm: event.target.value,
    });
  };

  fetchVideos() {
    axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=balloons&key=AIzaSyClhAQZ87dYqVrOTUa5kHGjRUDwPV8wmE8`)
      .then((res) => {
        const responseData = res.data;
        console.log(responseData);
        this.setState({
          movies: responseData,
        });
      });
  }

  render() {
    return (
      <form onSubmit = {this.fetchVideos()}>
        <input
          value={this.state.searchTerm}
          onChange={(event) => this.handleOnChange(event)}
          placeholder="Search videos!"
        />
        <button type = "submit">Submit</button>
      </form>
    );
  }
}

export default Search;
