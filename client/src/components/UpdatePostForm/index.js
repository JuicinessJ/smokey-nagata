import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { UPDATE_POST } from '../../utils/mutations';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import Auth from '../../utils/auth';


const UpdatePostForm = ({postId}) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [mileage, setMileage] = useState('');


  const [updatePost, {error}] = useMutation(UPDATE_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const { data } = await updatePost({
        variables: {
          postId,
          make, model, year, color,
          condition: null,
          mileage
        }

      });
      setMake('');
      setModel('');
      setYear('');
      setColor('');
      setMileage('');

      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'make') {
      setMake(value);
    }
    if (name === 'model') {
      setModel(value);
    }
    if (name === 'year') {
      setYear(~~value);
    }
    if (name === 'color') {
      setColor(value);
    }
    if (name === 'mileage') {
      setMileage(~~value);
    }
  }

  return (
    <div className='carformcontainer'>
      <Card className='Card' id='postformcard' sx={{ width: 300 }}>
      <h3>Update Post:</h3>
      {Auth.loggedIn() ? (
        <form id='carForm' onSubmit={handleFormSubmit}>

          <div className='carForm'>
            <label>
              <input type='text' name='make' className='postformitems' placeholder='Make' id='carMake' value={make} onChange={handleChange}></input>
            </label>

            <label>
              <input type='text' name='model' className='postformitems' placeholder='Model' id='carModel' value={model} onChange={handleChange}></input>
            </label>

            <label>
              <input type='number' name='year' className='postformitems' placeholder='Year' id='carYear' value={year} onChange={handleChange}></input>
            </label>

            <label>
              <input type='text' name='color' className='postformitems' placeholder='Color' id='carColor' value={color} onChange={handleChange}></input>
            </label>

            <label>
              <input type='number' name='mileage' className='postformitems' placeholder='Mileage' id='carMileage' value={mileage} onChange={handleChange}></input>
            </label>
          </div>

          <Button variant='contained' size='small' type='submit'>Submit</Button>
        </form>
      ) : (
        <p>
          You must be logged in to update you post.{' '}
          <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
        </p>
      )}
      </Card>
    </div>
  )
}

export default UpdatePostForm;