import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CommentForm from "./Components/CommentForm";
import VPlayer from "./Components/VPlayer";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      videoid: "",
    };
  }

  handleOnChange = (e) => {
    console.log("event", e.target.value);
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSubmit = async function (event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?q=guyonabuffalo&key=AIzaSyAdw1bj67vUatA4S2jskQYyc31L4Fm4S1w"
      );
      console.log("Returned data:", response);
      //put response into state
      //break response apart to get video id, put THAT into state
    } catch (err) {
      console.log(`Axios request failed: ${err}`);
    }
  };

  render() {
    return (
      <div className="main">
        <Navbar
          handleOnChange={(event) => this.handleOnChange(event)}
          //handleSubmit={(event) => this.handleSubmit(event)}
        />

        <VPlayer {...this.state.videoid} />

        <CommentForm />
      </div>
    );
  }
}
