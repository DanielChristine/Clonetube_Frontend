import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CommentForm from "./Components/CommentForm";
import VPlayer from "./Components/VPlayer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      videoid: 'MwTFqZN4V9E'
    };
  }

  handleOnChange = (e) => {
    console.log("event", e.target.value);
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <Navbar handleOnChange={(event) => this.handleOnChange(event)} />

        <VPlayer {...this.state.videoid} />

        <CommentForm />
      </div>
    );
  }
}
