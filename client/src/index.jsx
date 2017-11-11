import React from 'react';
import ReactDOM from 'react-dom'
import Store from './components/Store.jsx'
import SongList from './components/SongList.jsx';
import Search from './components/Search.jsx';
import $ from 'jquery'

require('dotenv').config();

const server = 'http://localhost'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.get(`${server}:1130/fetch`, (data) => {
      this.setState({songs: data});
    })
  }

  search(artist, title, genre) {
    const searchArtist = artist || '';
    const searchTitle = title || '';
    const searchGenre = genre || '';


    $.post(`${server}:1130/search`, (data) => {
      console.log(data);
    })







    /*const clientId = window.btoa('a0ae5fb0ac444d66a3228a2ab45d1135');
    const clientSecret = window.btoa('71ba6da019d94885a2a8907460da0098');*/
    // console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    $.ajaxSetup({
      headers: {Authorization: `Basic ${clientId}:${clientSecret}`}
    });
    // Make an ajax request to spotify api here
    $.ajax({
      url: 'https://accounts.spotify.com/api/token',
      data: 'client_credentials',
      success: function(data) {
        console.log(data);
      }
    })
  }

  render() {
    return (
      <div>
        <Search search={this.search.bind(this)}/>
        <Store />
        <SongList songs={this.state.songs}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));