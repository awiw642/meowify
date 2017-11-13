import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: null
    };
  }

  search() {
    this.props.search(this.state.searchInput)
  }

  updateState(e) {
    this.setState({searchInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.updateState.bind(this)}/>
        <button onClick={this.search.bind(this)}>Search</button>
      </div>
    )
  }
}
