import React from 'react';
import { Link } from 'react-router-dom';

const PostList = (
  { posts,
    title, 
    showTitle = true, 
    /*showUsername = true*/
  }) => {
    if (!posts.length) {
      return <h3>No Content Yet</h3>;
    }

  return (
    <div>index</div>
  )
}

export default PostList;