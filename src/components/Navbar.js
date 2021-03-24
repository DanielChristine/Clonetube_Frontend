import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  handleChange = (event) => {
    this.setState({
      ternm: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <div className="search-bar ui segment">
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="field">
              <label htmlFor="video-search">Video Search</label>
              <input
                onChange={this.handleChange}
                name="video-search"
                type="text"
                placeholder="Search.."
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Navbar;
