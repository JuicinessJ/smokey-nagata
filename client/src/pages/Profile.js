import React from 'react';

import MyBids from '../components/MyBids';
import MyVehicles from '../components/MyVehicles';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import etc

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

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

  // If logged in
  return (
    <div>
      {/* Need to add something */}
      <div className='profilecontainer'>
        <h1 className='profiletitle'>My Profile</h1>
        <MyBids />
        <MyVehicles />
      </div>
    </div>
  )
}

export default Profile;