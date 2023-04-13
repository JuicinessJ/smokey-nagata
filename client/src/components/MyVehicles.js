import React, { useState } from 'react';
import Auth from '../utils/auth';

const MyVehicles = () => {
return (
    <div className='bidscontainer'>
        <h2 className='bidscontainertitle'>My Vehicles</h2>
            <div className='singlevehiclecontainer'>
                <p className='vehiclename'>Lincoln Continental</p>
                    <p className='icon' id='activeicon'>Active</p>
                    <p className='hidden' id='inactiveicon'>Closed</p>
                <btn className='deletebutton' id='deletebidbutton'>DELETE</btn>
            </div>

            <div className='singlevehiclecontainer'>
                <p className='vehiclename'>Range Rover Classic</p>
                    <p className='hidden' id='activeicon'>Active</p>
                    <p className='icon' id='inactiveicon'>Closed</p>
                <btn className='deletebutton' id='deletebidbutton'>DELETE</btn>
            </div>
    </div>
)
}
export default MyVehicles