import React from "react";
import axios from 'axios';

class HanaWorship extends React.Component {
  state = {
    id: 0,
    apiKey: "AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",
    loading: true,
    channelId: "UCxEJ-ajcDqrc_XCyMmzEH5Q",
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
        <div className="video-container">
          <h1 className="video-title title">하나워쉽무브먼트 최신 업로드 영상</h1>
          <div className="video-items">
            {
              loading ?
                <div className="loading-container">Process Loading</div>
                :
                this.state.videoId.map((videoId) => (
                  <div key={videoId} className="video-item-container"><iframe title={videoId} className="video-item" src={"https://www.youtube.com/embed/" + videoId} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default HanaWorship;