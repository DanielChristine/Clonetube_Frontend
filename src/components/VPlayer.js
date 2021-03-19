import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class VPlayer extends Component {

  render() {
    return (
  
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
    );
  }
}
export default VPlayer;

