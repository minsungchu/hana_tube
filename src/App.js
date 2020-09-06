import React from 'react';
import axios from 'axios';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';

class App extends React.Component {
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
    const videos = data.items[0].statistics.videoCount;
    const subscribers = data.items[0].statistics.subscriberCount;
    const views = data.items[0].statistics.viewCount;
    const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;

    // update state
    this.setState({ imageLink, title, description, videos, subscribers, views, playlistId });

    this.GetPlayListItems();
  }

  GetPlayListItems = async () => {
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
    const opts = {
      height: '630',
      width: '600'
    };
    return (
      <div className="body">
        <div className="channel-container container">
          <h1 className="title">Youtube Channel Info</h1>
          <div className="channel">
            <div className="channel_logo">
              <img className="channel_img" src={this.state.imageLink} alt="text"></img>
              <a className="channel_link" href={"https://www.youtube.com/channel/" + this.state.channelId} target="_black">Go to Youtube Channel</a>
            </div>
            <ul className="channel_info">
              <li className="channel_item"><strong>YOUTUBE CHANNEL: {this.state.title}</strong></li>
              <li className="channel_item"><strong>CHANNEL DESCRIPTION: {this.state.description}</strong></li>
              <li className="channel_item"><strong>VIDEOS: {this.NumberWithCommas(this.state.videos)}</strong></li>
              <li className="channel_item"><strong>SUBSCRIBERS: {this.NumberWithCommas(this.state.subscribers)}</strong></li>
              <li className="channel_item"><strong>VIEWS: {this.NumberWithCommas(this.state.views)}</strong></li>
            </ul>
          </div>
        </div>
        <div className="video-container container">
          <h1 className="video-title title">Latest Youtube Videos</h1>
          <div className="video-items">
            {this.state.videoId.map((item) => (<YouTube className="video-item" videoId={item} opts={opts} />))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;