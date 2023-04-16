import React, {useState} from 'react';

import PostForm from '../components/PostForm';
import MyBids from '../components/MyBids';
import MyVehicles from '../components/MyVehicles';
import Button from '@mui/material/Button';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import etc

import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  // const { username: profileId } = useParams();
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);

    const postBtn = document.querySelector('#postBtn');
    postBtn.setAttribute('class', 'hidden');
    
  };
  const { loading, data } = useQuery(
    QUERY_ME,
    
  );

  const profile = data?.me || {};

  // if (Auth.loggedIn() && Auth.getProfile().data.username === profile.username) {
  //   return <Navigate to="/me"/>;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  // If not logged in
  if (!profile?.username) {
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
      <h1 className='profiletitle'>My Profile</h1>
      <div className='profilecontainer'>
        <div className='carCardContainer'>
          <MyVehicles 
          profile={profile}
          />
        </div>
        <div className='addPostBtn'>
          <div className='postBtn' id='postBtn'>
          <Button variant='contained' onClick={handleClick}>Add A Post</Button>
          </div>
          {isOpen && <div><PostForm/></div>}
        </div>
      </div>
    </div>
  )
}

export default Profile;