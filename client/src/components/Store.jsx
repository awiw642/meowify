import React from 'react';

const Store = () => {
  return (
    <form action='/store' method='POST'>
      <label htmlFor='artist'> Name: </label>
      <input type='text' name='artist'/>

      <label htmlFor='title'> Title: </label>
      <input type='text' name='title'/>

      <label htmlFor='genre'> Genre: </label>
      <input type='text' name='genre'/>

      <input type='submit' value='Save'/>
    </form>
  )
}

export default Store;