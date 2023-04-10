import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <main>
      <div>
        <div>
          <h4>Login</h4>
          <div>
            {/* Add formSubmit */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login