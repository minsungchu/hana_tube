import React from "react";
import axios from 'axios';
import Channel from '../components/Channel';

class Joychant extends React.Component {
  state = {
    id: 1,
    apiKey: "AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA",
    loading: true,
    channelId: "UCNF_5nwMVpkp3cTKlT9rvsg",
    //channelId                                                                                                            
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
    this.setState({ loading: false, videoId });
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
    const { loading } = this.state;
    return (
      <div className="body">
        <div className="video-container">
          <h1 className="video-title title">조이챈트 최신 업로드 영상</h1>
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
        <div className="video-container">
          <h1 className="video-title title-playlist">조이챈트 시즌1</h1>
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

export default Joychant;