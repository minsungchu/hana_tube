import React from 'react';
import './Youtube.css';

function Youtube(videoId) {
  return (
    <div key={videoId} className="video-item-container"><iframe title={videoId} className="video-item" src={"https://www.youtube.com/embed/" + videoId} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
  );
}

export default Youtube;