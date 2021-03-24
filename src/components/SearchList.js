import React from 'react';
import Video from './video';

const SearchList = ({videos, handleVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return <Video key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        console.log(video.id);
    });

    return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default SearchList;