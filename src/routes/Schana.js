import React from "react";
import axios from 'axios';
import "./Schana.css";
import Channel from '../components/Channel';
//import YoutubeDisplay from '../components/YoutubeDisplay';
import YouTube from 'react-youtube';

class Schana extends React.Component {
  state = {
    id: 0,
    apiKey: "AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",
    loading: true,
    channelId: "UChzI-IJRRWNTdwkHeCs5PKg",
    imageLink: "",
    title: "",
    description: "",
    videos: "",
    subscribers: "",
    views: "",
    playlistId: "",
    videoId: [""],
    videoList: {}
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
    const videos = this.NumberWithCommas(data.items[0].statistics.videoCount);
    const subscribers = this.NumberWithCommas(data.items[0].statistics.subscriberCount);
    const views = this.NumberWithCommas(data.items[0].statistics.viewCount);
    const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;

    // update state
    this.setState({ imageLink, title, description, videos, subscribers, views, playlistId });

    this.GetVideos();
  }

  GetVideos = async () => {
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
    this.setState({ loading: false, videoId });
  }

  componentDidMount() {
    this.GetChannels();
  }

  // add comma for every 3 numbers
  NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="body">
        <div className="channel-container container">
          <h1 className="title">유튜브 채널 정보</h1>
          {
            loading ?
              <div className="loading-containger">Process Loading</div>
              :
              <Channel
                key={this.state.id}
                imageLink={this.state.imageLink}
                channelId={this.state.channelId}
                title={this.state.title}
                description={this.state.description}
                videos={this.state.videos}
                subscribers={this.state.subscribers}
                views={this.state.views}
              />
          }
        </div>
        <div className="video-container container">
          <h1 className="video-title title">최신 업로드 영상</h1>
          <div className="video-items">
            {
              loading ?
                <div className="loading-containger">Process Loading</div>
                :
                this.state.videoId.map((videoId) => (
                  <div key={videoId} className="video-item-container"><YouTube className="video-item" videoId={videoId} /></div>
                ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Schana;