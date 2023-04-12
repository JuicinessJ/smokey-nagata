import React, { useState } from 'react'
import { useMutation } from '@apollo/client';

import { ADD_BID } from '../utils/mutations';
import Auth from '../utils/auth'

const BidForm = ({ postId }) => {
  const [amount, setAmount] = useState(0);
  const [addBid, { error }] = useMutation(ADD_BID);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const data = await addBid({
            variables: { 
                postId, 
                amount, 
                username: Auth.getProfile().data.username },
        });

        setAmount(amount);
    } catch (err) {
        console.error(err);
    }
  }
  
  return (
    <div className='bidform'>
        <h1 className='bidformtitle'>Bid on this vehicle</h1>
        {Auth.loggedIn() ? (
            <>
            <form
                onSubmit={handleFormSubmit}
            >
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
            
                <button className='submitbtn' id='bidformsubmitbtn' type='submit'>Add Bid</button>
            
            </form>
        </>
        ) : (
            <p>
                You need to be logged in to bid
            </p>
        )
        }
        </div>
  )
}

export default BidForm