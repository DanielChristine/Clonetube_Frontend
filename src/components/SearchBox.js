import React, { Component } from "react";
import axios from "axios";


class Search extends Component {
  state = {
    searchTerm: "",
  };

  handleOnChange = (event) => {
    console.log("event", event.target.value);
    this.setState({
      searchTerm: event.target.value,
    });
  };

  fetchVideos(searchTerm){
    console.log("SEARCH", searchTerm);
    axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyClhAQZ87dYqVrOTUa5kHGjRUDwPV8wmE8`)
      .then((res) => {
        const responseData = res.data;
        this.setState({
          data: responseData,
        });
      });
  }

  render() {
    return (
      <div className="input">
        <input
          value={this.state.searchTerm}
          onChange={(event) => this.handleOnChange(event)}
          placeholder="Search videos!"
        />
        <button onClick={() => this.props.fetchVideos("value")}>Submit</button>
      </div>
    );
  }
}

export default Search;
