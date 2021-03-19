import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            Clonetube Takeover!
          </a>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                
                  <button type="submit" size="md">
                    <i className="fa fa-search"></i>
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
