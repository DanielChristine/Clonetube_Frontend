import React, { Component } from "react";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      mystate: []
    }
  }

  render() {
  return (
    <div className='main'>
     
     <iframe title= "myFrame"
              id="ytplayer"
              type="text/jsx"
              width="800"
              height="400"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
              frameBorder="0"
            ></iframe>

    </div>
  );
}}
