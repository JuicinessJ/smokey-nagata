import React from 'react';

import MyBids from '../components/MyBids';
import MyVehicles from '../components/MyVehicles';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import etc

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import PostForm from '../components/PostForm';

import Button from '@mui/material/Button';

const Profile = () => {
  // const { username: profileId } = useParams();

  // const { loading, data } = useQuery(
  //   QUERY_ME,
    
  // );

  // const profile = data?.me || data?.profile || {};

  // if (Auth.loggedIn() && Auth.getProfile().data.username === profile.username) {
  //   return <Navigate to="/me"/>;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // If not logged in
  // if (!profile?.name) {
  //   return (
  //     <h4>
  //       Must be logged in to view profile
  //     </h4>
  //   );
  // }


const showPostForm = () => {
  const formfields = document.querySelector('#formfields');
  const createPostBtn = document.querySelector('#createPostBtn');
  formfields.setAttribute('class', 'formfields');
  createPostBtn.setAttribute('class', 'hidden');
};


  // If logged in
  return (
    <div>
      {/* Need to add something */}
      <div className='profilecontainer'>
        <h1 className='profiletitle'>My Profile</h1>
        <MyVehicles
        // posts={posts}
        // title="Vehicles for sale"
          />
        <Button size='small'
        id='createPostBtn'
        variant="contained"
        onClick={showPostForm}
        >Create New Post</Button>
        <PostForm />
      </div>
    </div>
  )
}

export default Profile;