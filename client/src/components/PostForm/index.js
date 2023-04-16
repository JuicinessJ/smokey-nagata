import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
// import { QUERY_CONTENT, QUERY_ME } from '../../utils/queries';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import Auth from '../../utils/auth';
import { randomVehicle } from '../../utils/fakerImages'

const PostForm = (/*{_id or postId}*/) => {
  // This might not work so might need todo something else like const everything with a useState for all values such as make, model, year, color, condition, and mileage
  // const [formState, setFormState] = useState({
  //   make: '',
  //   model: '',
  //   year: '',
  //   color: '',
  //   mileage: ''
  // })

  
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [mileage, setMileage] = useState('');
  

  const [addPost, {error}] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const image = randomVehicle().toString();
    console.log(image);
    try {
      // parseint?
      const { data } = await addPost({
        variables: {
          // ...formState
          make, model, year, color, 
          condition: null,
          mileage,
          image: image,
        }
        
      });
      setMake('');
      setModel('');
      setYear('');
      setColor('');
      setMileage('');
      // setFormState({
      //   make: '',
      //   model: '',
      //   year: '',
      //   color: '',
      //   mileage: ''
      // });
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
      <h3>Add Your Cars:</h3>
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
          You must be logged in to add your cars. Please{' '}
          <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
        </p>
      )}
      </Card>
    </div>
  )
}

export default PostForm;