import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";

class Navbar extends Component {
  render() {
    return (
      <div classname="navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">
            Clonetube Takeover!
          </a>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                  <button type="submit" size="md">
                    <i class="fa fa-search"></i>
                    <p>Go</p>
                  </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
