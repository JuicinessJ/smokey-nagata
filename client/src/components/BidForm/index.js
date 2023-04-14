import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_BID } from '../../utils/mutations';
import Auth from '../../utils/auth';

const BidForm = ( { postId } ) => {
//    const [amount, setAmount] = useState(0);
  const [addBid, { error }] = useMutation(ADD_BID);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.amount.value);
    console.log(postId);
    console.log(Auth.getProfile().data.username);
    try {
        const { data }  = await addBid({
            variables: { 
                postId, 
                amount: event.target.amount.value,
                username: Auth.getProfile().data.username,
            },
        });
        console.log(data);
    } catch (err) {
        console.error('Error:          '+err);
    }
  }
  
//   const handleChange = (event) => {
//     const { id , value } = event.target;
//     if(id === 'bidAmount'){
//         setAmount(value);
//     }
//   };


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
                    {/* <input className='bidformname' type='text' placeholder='Your Name'></input> */}
                    <label>
                        Your Bid:
                        <input 
                        className='bidformbid'
                        id='bidAmount'
                        defaultValue={0}
                        // value={amount}
                        type='text'
                        // placeholder='Your Bid' 
                        name='amount'
                        // onChange={handleChange}
                        ></input>
                    </label>
                
                    {/* <input className='bidformmsg' type='text' placeholder='Add a message (optional)'></input> */}
                
                    

                </div>
                
                <button className='submitbtn' id='bidformsubmitbtn' type='submit'>Add Bid</button>
                
                {/* {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        {error.message}
                    </div>
                )} */}
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

export default BidForm;