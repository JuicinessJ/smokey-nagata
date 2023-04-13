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

        
    } catch (err) {
        console.error(err);
    }
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === 'amount'){
        setAmount(value);
    }
  }
  return (
    <div className='bidform'>
        <h1 className='bidformtitle'>Bid on this vehicle</h1>
        {Auth.loggedIn() ? (
            <>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div>
                    <input className='bidformname' type='text' placeholder='Your Name'></input>
                
                    <input 
                    className='bidformbid' 
                    type='text' 
                    value={amount}
                    placeholder='Your Bid' 
                    name='amount' 
                    onChange={handleChange}></input>
                
                    <input className='bidformmsg' type='text' placeholder='Add a message (optional)'></input>
                
                    

                </div>
                
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