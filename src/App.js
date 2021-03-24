import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CommentForm from "./Components/CommentForm";
import VPlayer from "./Components/VPlayer";
import clonetube from "./Api/clonetube";
import SearchList from "./Components/SearchList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

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

  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '1em'}}>
        <Navbar handleFormSubmit={this.handleSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className="eleven wide column">
              <VPlayer video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <SearchList handleVideoSelect ={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;