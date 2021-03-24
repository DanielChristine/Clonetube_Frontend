import React from "react";

const VPlayer = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Enter search keyword to load...</h1>
        <br></br>
        <p style={{ fontSize: "25px" }}>
          Use the API to search for videos matching specific search terms,
          topics, locations, publication dates, and much more!! The APIs
          search.list method also supports searches for playlists and channels!!
        </p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          allowFullScreen
          title="Video player"
          width="800"
          height="600"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VPlayer;
