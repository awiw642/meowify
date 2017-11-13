import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/Store.jsx';
import SongList from './components/SongList.jsx';
import Search from './components/Search.jsx';
import SearchResults from './components/SearchResults.jsx';
import $ from 'jquery';

require('dotenv').config();

const server = 'http://localhost'
const port = '1130'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      savedSongs: [],
      isSearched: false
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.get(`${server}:${port}/fetch`, (data) => {
      this.setState({savedSongs: data});
    })
  }

  search(keyword) {
    $.ajax({
      url: `${server}:${port}/search`,
      type: 'POST',
      data: {keyword: keyword},
      success: (data) => {
        this.setState({songs: data, isSearched: true});
      }
    });
  }

  render() {
    console.log(this.state.songs.artists);
    return (
      <div>
        <Search songs={this.state.songs} search={this.search.bind(this)}/>
        <SearchResults isSearched={this.state.isSearched} foundSongs={this.state.songs}/>
        <Store />
        <SongList songs={this.state.savedSongs}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));