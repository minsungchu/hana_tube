import React from "react";
import "./Channel.css";
// add comma for every 3 numbers
document.cookie = 'safeCookie1=https://youtube.com; SameSite=Lax';


function Channel({ id, imageLink, channelId, title, description, videos, subscribers, views }) {
  return (
    <div>
      <div className="channel row">
        <div className="channel_logo col-md-2">
          <img className="channel_img" src={imageLink} alt="text"></img>
          <a className="channel_link" href={"https://www.youtube.com/channel/" + channelId} target="_black">유튜브 채널 링크</a>
        </div>
        <ul className="channel_info col-md-2">
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