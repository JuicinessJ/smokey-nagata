import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/auth';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

const SignupForm = () => {

    // set initial form state with username, email, and password
    const [signupFormData, setSignupFormData] = useState({ username: '', email: '', password: ''});
    // set state for form validation
    const [validated] = useState(false);

    // use a mutation to add users
    const [addUser, { error }] = useMutation(ADD_USER);
    
    const handleSignupInput = (event) => {
        const { name, value } = event.target;
        setSignupFormData({ ...signupFormData, [name]: value});
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check the form to see if it has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try{

            // grab the signup data from the mutation
            const { data } = await addUser({
                variables: { ...signupFormData },
            });

            // send the data as a token
            Auth.login(data.addUser.token);

        } catch (err ){
            console.error(err);
        }

        // clear out the signupform data
        setSignupFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        onChange={handleSignupInput}
                        value={signupFormData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                </Form.Group>
            </Form>
        </>
    );
};

export default SignupForm

