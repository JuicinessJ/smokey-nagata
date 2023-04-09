import React from 'react'
import BidForm from '../components/Bidform'
import CarPic from '../assets/images/lincoln-continental.jpg'

const index = () => {
  return (
    <div className='maincontent'>
        <h1 className='sitetitle'>This Car In This Area</h1>
        <div className='picandbidform'>
            <div className='imagecontainer'>
                <img className='carpic' src={CarPic} alt='car for sale'></img>
                <p className='cardescription'></p>
            </div>
            <div className='bidformcontainer'>
                <BidForm />
            </div>
        </div>
        <div className='posterinfo'>
            <p>This car was posted by User</p>
            <p>User.Location</p>
            <p>View Profile</p>
        </div>
    </div>
  )
}

export default index