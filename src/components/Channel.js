import React from "react";
import "./Channel.css";
// add comma for every 3 numbers


function Channel({ id, imageLink, channelId, title, description, videos, subscribers, views }) {
  return (
    <div>
      <h1 className="title">유튜브 채널 정보</h1>
      <div className="channel">
        <div className="channel_logo">
          <img className="channel_img" src={imageLink} alt="text"></img>
          <a className="channel_link" href={"https://www.youtube.com/channel/" + channelId} target="_black">유튜브 채널 링크</a>
        </div>
        <ul className="channel_info">
          <li className="channel_item"><strong>{title}</strong></li>
          <li className="channel_item">채널 설명: {description}</li>
          <li className="channel_item">영상수: {videos}</li>
          <li className="channel_item">구독자수: {subscribers}</li>
          <li className="channel_item">조회수: {views}</li>
        </ul>
      </div>
    </div>
  );
}

export default Channel;