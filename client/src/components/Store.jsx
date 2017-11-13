import React from 'react';

const Store = () => {
  return (
    <form action='/store' method='POST'>
      <label htmlFor='artist'> Artists: </label>
      <input type='text' name='artist'/>

      <label htmlFor='title'> Title: </label>
      <input type='text' name='title'/>

      <input type='submit' value='Save'/>
    </form>
  )
}

export default Store;