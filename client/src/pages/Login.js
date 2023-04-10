import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({...formState, [name]: value});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({ variables: { ...formState } });

      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }


    setFormState({email: '', password: ''});
  };

  return (
    // <main>
    //   <div>
    //     <div>
    //       <h4>Login</h4>
    //       <div>
    //         {/* Add formSubmit */}
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <>
      <Form noValidate validated={data} onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleChange}
            value={formState.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your password'
            name='password'
            onChange={handleChange}
            value={formState.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        <Form.Group>

        </Form.Group>

        <Button
          disabled={!(formState.email && formState.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>

      </Form>
    
    </>
  )
}

export default Login