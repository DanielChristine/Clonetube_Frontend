import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CommentForm from "./Components/CommentForm";
import Search from "./Components/SearchBox";
import VPlayer from "./Components/VPlayer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mystate: [],
    };
  }

  render() {
    return (
      <div className="main">
        <Navbar />

        <VPlayer />

        <CommentForm />

        <SearchBox searchAsyouType={false} />
      </div>
    );
  }
}
