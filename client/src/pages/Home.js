import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import TempPostList from '../components/TempPostList';

import { QUERY_ALL_POSTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_ALL_POSTS);
  // const posts = data?.posts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
            <TempPostList
              // posts={posts}
              // title="Vehicles for sale"
            />
        </div>
      </div>
    </main>
  );
};

export default Home;