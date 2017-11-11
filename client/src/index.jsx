import React from 'react';
import ReactDOM from 'react-dom'
import Store from './components/Store.jsx'
import SongList from './components/SongList.jsx';
import $ from 'jquery'

const server = 'http://localhost'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
/*    this.fetch();
*/  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.get(`${server}:1130/fetch`, (data) => {
      this.setState({songs: data});
    })
  }

  render() {
    return (
      <div>
        <Store/>
        <SongList songs={this.state.songs}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));