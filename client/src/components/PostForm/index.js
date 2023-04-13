import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POST, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';


const PostForm = () => {
  // Might need to useState every variables
  // const [formState, setFormState] = useState({
  //   make: '',
  //   model: '',
  //   year: '',
  //   username: ''
  // })

  const [addPost, {error}] = useMutation(ADD_POST/*,{
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POST });

        cache.writeQuery({
          query: QUERY_POST,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.log(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  }*/);

  // Might need to add or change some stuff since there is no postText but we have more variables inside our mutations
  const handleFormSubmit = async (event) => {
    // const { make, model, year, username } = event.target.value
    event.preventDefault();
    // console.log(event.target.make.value);
    let make = event.target.make.value;
    let model = event.target.model.value;
    let year = event.target.year.value;
    let color = event.target.color.value;
    let miles = event.target.miles.value;
    let username = 'whatever';
    // let username = Auth.getProfile()
    // console.log(username);
    try {
      const { data } = await addPost({
        variables: {
          "make": make,
          "model": model,
          "year": year,
          "username": username,
          "mileage": miles,
        },
      });

    } catch (err) {
      console.error(err);
    }
  };

  // Def needs to change something.
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'username' && value.length <= 280) {
  //     setFormState({ ...formState, [name]: value });
  //   } else if (name !== 'username') {
  //     setFormState({ ...formState, [name]: value});
  //   }
  // };

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

          <label>The Color:</label>
          <input type='text' name='color' id='carColor'></input>

          <label>The Mileage:</label>
          <input type='text' name='miles' id='carMiles'></input>
        </div>

        <button type='submit'>Submit your Car</button>

      </form>
    </div>
  )
}

export default PostForm;