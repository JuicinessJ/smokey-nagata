import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CONTENT } from '../../utils/mutations';
import { QUERY_CONTENT, QUERY_ME } from '../../utils/queries';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Auth from '../../utils/auth';


const PostForm = () => {

  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div id='formfields' className='hidden'>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Vehicle manufacturer"
            variant="filled"
          />
                    <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Model of your vehicle"
            variant="filled"
          />
          <TextField
            required
            id="filled-disabled"
            label="Required"
            defaultValue="Year of manufacture"
            variant="filled"
          />
          <TextField
            id="filled-disabled"
            defaultValue="Color"
            variant="filled"
          />
            <TextField
            id="filled-disabled"
            defaultValue="Mileage"
            variant="filled"
          />
            <TextField
            id="filled-disabled"
            defaultValue="Condition"
            variant="filled"
          />
        <Button size='small'
        variant="contained"
        >Submit</Button>
        </div>
      </Box>
    );
  }

export default PostForm