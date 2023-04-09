import React from 'react'
import BidForm from '../components/Bidform'

const index = () => {
  return (
    <div className='maincontent'>
        <h1 className='sitetitle'>This Car In This Area</h1>
        <div className='imagecontainer'>
            <img className='carpic' src='./assets/images/1964-lincoln-continental.jpg' alt='car for sale'></img>
            <p className='cardescription'></p>
        </div>
        <BidForm />
        <div className='posterinfo'>
            <p>This car was posted by User</p>
            <p>User.Location</p>
            <p>View Profile</p>
        </div>
    </div>
  )
}

export default index