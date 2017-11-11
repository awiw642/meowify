import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input type="text" onChange={props.search}/>
      <button>Search</button>
    </div>
  )
}

export default Search;