import React from "react";

const Video = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Video;
