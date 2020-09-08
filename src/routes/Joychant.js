import React from "react";
import axios from 'axios';
import YouTube from 'react-youtube';
import "./Joychant.css";

class Joychant extends React.Component {
  state = {
    apiKey: "AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",
    loading: true,
    channelId: "UCNF_5nwMVpkp3cTKlT9rvsg",
    //channelId: "UChzI-IJRRWNTdwkHeCs5PKg",
    imageLink: "",
    title: "",
    description: "",
    videos: "",
    subscribers: "",
    views: "",
    playlistId: "",
    videoId: [],
    videoList: {},
    playListIdSeason1: "",
    videoIdSeason1: []
  };

  GetChannels = async () => {
    // get channel data
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?key=${this.state.apiKey}&id=${this.state.channelId}&part=snippet,contentDetails,statistics`;
    const { data } = await axios.get(channelUrl);
    console.log(data);

    // parse received data
    const imageLink = data.items[0].snippet.thumbnails.medium.url;
    const title = data.items[0].snippet.title;
    const description = data.items[0].snippet.description;
    const videos = data.items[0].statistics.videoCount;
    const subscribers = data.items[0].statistics.subscriberCount;
    const views = data.items[0].statistics.viewCount;
    const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;

    // update state
    this.setState({ imageLink, title, description, videos, subscribers, views, playlistId });

    this.GetVideosLatest();
  }

  GetVideosLatest = async () => {
    // get playlistitem data
    const baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems?";
    const apiKeyParam = `key=${this.state.apiKey}`;
    const playListIdParam = `&playlistId=${this.state.playlistId}`;
    const etcParam = "&part=snippet&maxResults=12";
    const playListItemsUrl = baseUrl + apiKeyParam + playListIdParam + etcParam;

    const { data } = await axios.get(playListItemsUrl);
    console.log(data);

    // parse received data
    const playListItems = data.items;
    const videoId = [];
    const len = playListItems.length;
    for (let idx = 0; idx < len; idx++) {
      videoId[idx] = data.items[idx].snippet.resourceId.videoId;
    }

    console.log(videoId);

    // update state
    this.setState({ videoId });
  }

  GetPlaylist = async () => {
    const baseUrl = "https://www.googleapis.com/youtube/v3/playlists?";
    const apiKeyParam = `key=${this.state.apiKey}`;
    const channelID = `&channelId=${this.state.channelId}`;
    const etcParam = "&part=snippet&maxResults=50";
    const playListUrl = baseUrl + apiKeyParam + channelID + etcParam;

    const { data } = await axios.get(playListUrl);
    console.log(data);
    const playListIdSeason1 = data.items[5].id;

    this.setState({ playListIdSeason1 });

    this.GetVideosSeason1();
  }

  GetVideosSeason1 = async () => {
    // get playlistitem data
    const baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems?";
    const apiKeyParam = `key=${this.state.apiKey}`;
    const playListIdParam = `&playlistId=${this.state.playListIdSeason1}`;
    const etcParam = "&part=snippet&maxResults=50";
    const playListItemsUrl = baseUrl + apiKeyParam + playListIdParam + etcParam;

    const { data } = await axios.get(playListItemsUrl);
    console.log(data);

    // parse received data
    const playListItems = data.items;
    const videoIdSeason1 = [];
    const len = playListItems.length;
    for (let idx = 0; idx < len; idx++) {
      videoIdSeason1[idx] = data.items[idx].snippet.resourceId.videoId;
    }

    console.log(videoIdSeason1);

    // update state
    this.setState({ videoIdSeason1 });
  }

  componentDidMount() {
    this.GetChannels();
    this.GetPlaylist();
  }

  // add comma for every 3 numbers
  NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="body">
        <div className="channel-container container">
          <h1 className="title">유튜브 채널 정보</h1>
          <div className="channel">
            <div className="channel_logo">
              <img className="channel_img" src={this.state.imageLink} alt="text"></img>
              <a className="channel_link" href={"https://www.youtube.com/channel/" + this.state.channelId} target="_black">유튜브 채널 링크</a>
            </div>
            <ul className="channel_info">
              <li className="channel_item"><strong>{this.state.title}</strong></li>
              <li className="channel_item">채널 설명: {this.state.description}</li>
              <li className="channel_item">영상수: {this.NumberWithCommas(this.state.videos)}</li>
              <li className="channel_item">구독자수: {this.NumberWithCommas(this.state.subscribers)}</li>
              <li className="channel_item">조회수: {this.NumberWithCommas(this.state.views)}</li>
            </ul>
          </div>
        </div>
        <div className="video-container container">
          <h1 className="video-title title">최신 업로드 영상</h1>
          <div className="video-items">
            {this.state.videoId.map((item) => (<div className="video-item-container"><YouTube className="video-item" videoId={item} /></div>))}
          </div>
        </div>
        <div className="video-container container">
          <h1 className="video-title title">조이챈트 시즌1</h1>
          <div className="video-items">
            {this.state.videoIdSeason1.map((item) => (<div className="video-item-container"><YouTube className="video-item" videoId={item} /></div>))}
          </div>
        </div>
      </div>
    )
  }
}

export default Joychant;