import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import CommentForm from "./CommentForm";

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
        <div className="header">
          <Navbar />
        </div>
        <div className="bigplayer">
          <iframe
            title="myFrame"
            id="ytplayer"
            type="text/jsx"
            width="800"
            height="400"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
            frameBorder="none"
          ></iframe>
        </div>
        <div className="commentFrame">
          <CommentForm />
        </div>
      </div>
    );
  }
}
