import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    loading: true,
    apiKey: 'AIzaSyC6GWXm4z_sxkiMBkx08qYzmulaeM9aevA',
    channelId: 'UCNF_5nwMVpkp3cTKlT9rvsg',
    channelEndpoint: `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=snippet,contentDetails,statistics`,
  };
  render() {
    return (
      <div className="App">
        <div className="container mt-5 pt-5">
          <h1 className="display-4 text-center">My Youtube Channel</h1>
          <div className="row my-5" id="video-channel"></div>
          <br></br>
          <hr></hr>
          <br></br>
          <h1 className="display-4 text-center">Latest Youtube Videos</h1>
          <div className="row my-5" id="video-container"></div>
        </div>
      </div>
    );
  }

}

export default App;

// https://www.youtube.com/watch?v=SHzU9lp1aqs
// 18:17