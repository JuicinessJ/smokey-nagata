import React from 'react'

const BidForm = () => {
  return (
    <div className='bidform'>
        <h1 className='bidformtitle'>Bid on this vehicle</h1>
        <ul className='bidformitems'>
            <li>
                <input className='bidformname' type='text' placeholder='Your Name'></input>
            </li>
            <li>
                <input className='bidformbid' type='text' placeholder='Your Bid'></input>
            </li>
            <li>
                <input className='bidformmsg' type='text' placeholder='Add a message (optional)'></input>
            </li>
        </ul>
        <btn className='submitbtn' id='bidformsubmitbtn'>Submit</btn>
    </div>
  )
}

export default BidForm