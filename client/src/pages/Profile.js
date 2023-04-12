import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import etc

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  const profile = data?.me || data?.profile || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me"/>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // If not logged in
  if (!profile?.name) {
    return (
      <h4>
        Must be logged in to view profile
      </h4>
    );
  }

  // If logged in
  return (
    <div>
      {/* Need to add something */}
    </div>
  )
}

export default Profile;