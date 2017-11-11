import React from 'react';

const SongList = (props) => {
  return (
      <div>
        <h4> Saved Songs </h4>
        <table>
          <thead>
            <tr>
              <td>Artist</td>
              <td>Title</td>
              <td>Genre</td>
            </tr>
          </thead>
          <tbody>
            {props.songs.map((song, index) => {
              return (
                <tr>
                  <td>{song.artist}</td>
                  <td>{song.title}</td>
                  <td>{song.genre}</td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    )
}

export default SongList;