import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <section>
      <h1 className='sitetitle'>Smokey Nagata<small className='subtitle'>Bid on cars in your area</small></h1>
      <ul className="navbar">
        <li className="nav-item">
          <a
            href="#LogIn"
            onClick={() => handlePageChange('LogIn')}
            className={currentPage === 'LogIn' ? 'nav-link-active' : 'nav-link'}
          >
            Log In / Sign Up
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#MyProfile"
            onClick={() => handlePageChange('MyProfile')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'MyProfile' ? 'nav-link-active' : 'nav-link'}
          >
            My Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Listings"
            onClick={() => handlePageChange('Listings')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Listings' ? 'nav-link-active' : 'nav-link'}
          >
            Listings In My Area
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
