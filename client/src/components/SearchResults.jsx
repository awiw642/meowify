import React from 'react';

const SearchResults = (props) => {
  let isSearched = props.isSearched;
  if (isSearched) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Artists</td>
            </tr>
          </thead>
          <tbody>
            {props.foundSongs.map((song) => {
              return (
                <tr>
                  <td>{song.title}</td>
                  <td>{song.artists.join(', ')}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

export default SearchResults;