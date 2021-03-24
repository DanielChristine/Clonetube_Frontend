import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CommentForm from "./Components/CommentForm";
import VPlayer from "./Components/VPlayer";
import axios from "axios";
import clonetube from "./Api/clonetube";

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

  handleSubmit = async (termFromSearchBar) => {
    const response = await clonetube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
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
