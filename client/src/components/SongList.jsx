import React from 'react';

const SongList = (props) => {
  return (
      <div>
        <h4> Saved Songs </h4>
        <table>
          <thead>
            <tr>
              <td>Artists</td>
              <td>Title</td>
            </tr>
          </thead>
          <tbody>
            {props.songs.map((song, index) => {
              console.log(song);
              return (
                <tr>
                  <td>{song.artist}</td>
                  <td>{song.title}</td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    )
}

export default SongList;