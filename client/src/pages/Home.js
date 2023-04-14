import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import TempPostList from '../components/TempPostList';
import TempPostList2 from '../components/TempPostList2';

import { QUERY_ALL_POSTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_ALL_POSTS);
  // const posts = data?.posts || [];

  return (
    <main>
      <div className="minipostboard">
            <TempPostList
              // posts={posts}
              // title="Vehicles for sale"
            />
            <TempPostList2 />
      </div>
    </main>
  );
};

export default Home;