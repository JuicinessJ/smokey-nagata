import React from 'react'
import BidForm from '../components/Bidform'
import CarPic from '../assets/images/lincoln-continental.jpg'

const index = () => {

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
//   const { postId } = useParams();

  return (
    <div className='maincontent'>
        <h1 className='sitetitle'><p className='cartitle'>This.Car</p> In <p className='cartitle'>This.Location</p> Area</h1>
            <div className='imgspecsandbidform'>
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
            </div>
        <div className='poster'>
            <h2 className='postertitle'>This vehicle was posted for sale by:</h2>
            <div className='posterinfo'>
                <p className='posterinfoitem' id='posterinfouser'>User.username</p>
                <p className='posterinfoitem' id='posterinfolocation'>User.Location</p>
                <p className='posterinfoitem' id='posterinfolink'>View Profile</p>
            </div>
        </div>
    </div>
  )
}

export default index