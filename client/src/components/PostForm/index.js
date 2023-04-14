import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
// import { QUERY_CONTENT, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';


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

    try {
      // parseint?
      const { data } = await addPost({
        variables: {
          // ...formState
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
      // setFormState({
      //   make: '',
      //   model: '',
      //   year: '',
      //   color: '',
      //   mileage: ''
      // });
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
    <div>
      <h3>Add Your Cars:</h3>
      {Auth.loggedIn() ? (
        <form id='carForm' onSubmit={handleFormSubmit}>

          <div>
            <label>The Make:
              <input type='text' name='make' id='carMake' value={make} onChange={handleChange}></input>
            </label>

            <label>The Model:
              <input type='text' name='model' id='carModel' value={model} onChange={handleChange}></input>
            </label>

            <label>The Year:
              <input type='number' name='year' id='carYear' value={year} onChange={handleChange}></input>
            </label>

            <label>The Color:
              <input type='text' name='color' id='carColor' value={color} onChange={handleChange}></input>
            </label>

            <label>The Mileage:
              <input type='number' name='mileage' id='carMileage' value={mileage} onChange={handleChange}></input>
            </label>
          </div>

          <button type='submit'>Submit</button>
        </form>
      ) : (
        <p>
          You must be logged in to add your cars. Please{' '}
          <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
        </p>
      )}
    </div>
  )
}

export default PostForm;