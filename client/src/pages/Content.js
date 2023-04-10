import React from 'react'
import BidForm from '../components/Bidform'
import CarPic from '../assets/images/lincoln-continental.jpg'

const index = () => {
  return (
    <div className='maincontent'>
        <h1 className='sitetitle'>This Car In This Area</h1>
            <div className='imageandspecs'>
                <img className='carpic' src={CarPic} alt='car for sale'></img>
                <div className='carspecs'>
                    <ul className='carspecslist'>
                        <li className='carspecs'>Model:<p className='specsinfo' id='specsinfomodel'>Lincoln Continental</p></li>
                        <li className='carspecs'>Year: <p className='specsinfo' id='specsinfoyear'>1964</p></li>
                        <li className='carspecs'>Color: <p className='specsinfo' id='specsinfocolor'>White</p></li>
                        <li className='carspecs'>Mileage: <p className='specsinfo' id='specsinfomileage'>50,000</p></li>
                        <li className='carspecs'>Condition: <p className='specsinfo' id='specsinfocondition'>Excellent</p></li>
                    </ul>
                </div>
            </div>
        <div className='bidformcontainer'>
                <BidForm />
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