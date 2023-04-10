import React from 'react';
import { useQuery } from '@apollo/client';

// import ContentsList
// import ContentForm


import { QUERY_THOUGHTS } from '../utils/queries';


const Home = () => {
  // Don't know if correct
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const contents = data?.contents || [];


  return (
    <div>
      <div>
        
      </div>
    </div>
  )
}

export default Home


/*
  Note:
  Check App.JS notes.
*/