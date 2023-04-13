import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
// import { QUERY_POST, QUERY_ME } from '../../utils/queries';

// import Auth from '../../utils/auth';


const PostForm = () => {
  const [formState, setFormState] = useState({
    make: '',
    model: '',
    year: '',
    // color: '',
    // miles: ''
  });

  const [addPost, {error}] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          ...formState
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add your Car</h3>
      <form id='carForm' onSubmit={handleFormSubmit}>
        <div>
          <label>The Make:</label>
          <input type='text' name='make' id='carMake'></input>

          <label>The Model:</label>
          <input type='text' name='model' id='carModel'></input>

          <label>The Year:</label>
          <input type='text' name='year' id='carYear'></input>

          {/* <label>The Color:</label>
          <input type='text' name='color' id='carColor'></input>

          <label>The Mileage:</label>
          <input type='text' name='miles' id='carMiles'></input> */}
        </div>

        <button type='submit'>Submit your Car</button>

      </form>
    </div>
  )
}

export default PostForm;