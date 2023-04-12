import React from 'react';
import { Link } from 'react-router-dom';

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
    <div>index</div>
  )
}

export default ContentList;