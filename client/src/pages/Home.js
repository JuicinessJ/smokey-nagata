import React from 'react';
import { useQuery } from '@apollo/client';

import ContentForm from '../components/ContentForm/index';
import ContentList from '../components/ContentList/index';


import { QUERY_THOUGHTS } from '../utils/queries';


const Home = () => {
  // Don't know if correct
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const contents = data?.contents || [];


  return (
    <main>
      <div className=''>
        <div className=''>
          <ContentForm/>
        </div>
        <div className=''>
          {/* <ContentList contents={} title=""/> */}
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