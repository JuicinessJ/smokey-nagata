import React from 'react';
import { useQuery } from '@apollo/client';

import PostForm from '../components/PostForm/index';
import PostList from '../components/PostList/index';


import { QUERY_PROFILES } from '../utils/queries';


const Home = () => {
  // Don't know if correct
  //const { loading, data } = useQuery(QUERY_PROFILES);
  //const contents = data?.contents || [];


  return (
    <main>
      <div className=''>
        <div className=''>
          <PostForm/>
        </div>
        <div className=''>
          {/* <PostList contents={} title=""/> */}
        </div>
      </div>
    </main>
  )
}

export default Home


/*
  Note:
  Check App.JS notes.
*/