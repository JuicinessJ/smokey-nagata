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

  // function invalidEmail() {
  //   const loginemailerror = document.querySelector('#loginemailerror');
  //   const loginformemail = document.querySelector('#loginformemail');
  //   if (loginformemail.value !== 'gib@gab.com') {
  //   loginemailerror.setAttribute('class', 'showmsg');
  //   }
  // }

  // function invalidPassword() {
  //   const loginpassworderror = document.querySelector('#loginpassworderror');
  //   const loginformpassword = document.querySelector('#loginformpassword');
  //   if (loginformpassword.value === '') {
  //   loginpassworderror.setAttribute('class', 'showmsg');
  //   }
  // }

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
          <Form.Label htmlFor='email'></Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            id='loginformemail'
            onChange={handleChange}
            value={formState.email}
            //onBlur={invalidEmail}
            required
          />
          <Form.Control.Feedback type='invalid' id='loginemailerror' className='hidden'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Label htmlFor='password'></Form.Label>
          <Form.Control
            type='text'
            placeholder='Your password'
            id='loginformpassword'
            name='password'
            onChange={handleChange}
            value={formState.password}
            //onBlur={invalidPassword}
            required
          />
          <Form.Control.Feedback type='invalid' id='loginpassworderror' className='hidden'>Password is required!</Form.Control.Feedback>
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