import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class Navbar extends Component {
  constructor(props){
    super(props);  
  this.state = {
    response: ""
  };
}

  // handleOnChange = (e) => {
  //   console.log("event", e.target.value);
  //   this.setState({
  //     searchTerm: e.target.value,
  //   });
  // };

  /* handleSubmit = async function (event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?q=${this.target.value}&key=AIzaSyAdw1bj67vUatA4S2jskQYyc31L4Fm4S1w"
      );
      console.log("Returned data:", response);
      //put response into state
      //break response apart to get video id, put THAT into state
    } catch (err) {
      console.log(`Axios request failed: ${err}`);
    }
  }; */

  render() {
    return (
      <div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">
            Clonetube Takeover!
          </a>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto"></ul>
          </div>
        </nav>
        <form onSubmit={(event) => this.props.handleSubmit(event)}>
          <input
            value={this.state.searchTerm}
            onChange={(event) => this.props.handleOnChange(event)}
            placeholder="Search videos!"
          />
          <button type="submit">fetchVideos</button>
        </form>
      </div>
    );
  }
}
export default Navbar;
