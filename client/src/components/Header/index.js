import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        <div className='sitetitle'>
          <Link className='' to="/">
            <h1>The Car Shop</h1>
          </Link>
        </div>
        <div className='navbar'>
          {Auth.loggedIn() ? (
            <>
              <Link className='profilelink' to="/me">
                <Button variant='contained'>{Auth.getProfile().data.username}'s profile</Button>
              </Link>
              <Button className='logoutbtn' onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link className='' to="/login"> 
                Login
              </Link>
              <Link className='' to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;