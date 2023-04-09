import React from 'react'

const profile = () => {
  return (
    <div className='profilepage'>
        <h1 className='footercredit'>Username's Profile</h1>
        <div className='mybidsdisplay'>
            <h2>My Bids</h2>
            <div className='bidcontainer'>
                <h3>Original Post Name Here</h3>
                <div className='activeicon'>Active</div>
                <div className='hidden'>Closed</div>
            </div>
        </div>
        <div className='myvehiclesdisplay'>

        </div>
        <div className='userinfo'>
            <h2>My Info</h2>
            <p className='userlocation'>User location</p>
            <p className='userbio'>User bio</p>
        </div>
    </div>
  )
}

export default profile