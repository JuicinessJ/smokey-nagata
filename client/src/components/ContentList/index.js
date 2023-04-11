import React from 'react';
import { Link } from 'react-router-dom';
import MiniPost from '../MiniPost'


const ContentList = (
  { contents,
    title, 
    showTitle = true, 
    /*showUsername = true*/
  }) => {
    if (!contents.length) {
      return <h3>No Content Yet</h3>;
    }

  return (
    <div>
      <h1 className='homepagetitle'>Vehicles For Sale In Your Area</h1>
      <div className='minipostcontainer'>
        <MiniPost />
      </div>
    </div>
  )
}

export default ContentList;