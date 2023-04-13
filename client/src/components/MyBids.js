import React, { useState } from 'react';
import Auth from '../utils/auth';

const MyBids = () => {
return (
    <div className='bidscontainer'>
        <h2 className='bidscontainertitle'>My Bids</h2>
            <div className='singlebidcontainer'>
                <p className='bidname'>Jeep Cherokee</p>
                    <p className='icon' id='activeicon'>Active</p>
                    <p className='hidden' id='inactiveicon'>Closed</p>
                <btn className='deletebutton' id='deletebidbutton'>DELETE</btn>
            </div>

            <div className='singlebidcontainer'>
                    <p className='bidname'>Toyota Hilux</p>
                        <p className='hidden' id='activeicon'>Active</p>
                        <p className='icon' id='inactiveicon'>Closed</p>
                    <btn className='deletebutton' id='deletebidbutton'>DELETE</btn>
            </div>
    </div>
)
}
export default MyBids