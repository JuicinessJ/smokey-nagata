import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_BID } from '../../utils/mutations';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Auth from '../../utils/auth';

const BidForm = ( { postId } ) => {
  const [amount, setAmount] = useState('');
  const [addBid, { error }] = useMutation(ADD_BID);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const { data }  = await addBid({
            variables: {
                postId,
                amount,
            },
        });

        setAmount('');
        window.location.reload();
    } catch (err) {
        console.error('Error:          '+err);
    }
  }




  return (
    <Card className='Card' id='bidform' sx={{ minWidth: 345 }}>
        <h1 className='bidformitems'>Bid on this vehicle</h1>
        {Auth.loggedIn() ? (
            <>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div>
                    <label>
                        <TextField
                        className='bidformitems'
                        id='bidAmount'
                        variant='outlined'
                        value={amount}
                        type='text'
                        placeholder='$ 0.00'
                        name='amount'
                        onChange={e => setAmount(~~e.target.value)}
                        ></TextField>
                    </label>




                </div>

                <Button className='submitbtn' variant='contained' id='bidformitems' type='submit'>Add Bid</Button>

                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        {error.message}
                    </div>
                )}
            </form>
        </>
        ) : (
            <p>
                You need to be logged in to bid
            </p>
        )
        }
        </Card>
  )
}

export default BidForm;