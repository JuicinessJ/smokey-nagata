import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

const SignupForm = () => {

    // set initial form state with username, email, and password
    const [signupFormData, setSignupFormData] = useState({ username: '', email: '', password: '', location: ''});
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
            location: '',
        });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='signupform'>

                <Form.Group className='inputfield'>
                    <Form.Label htmlFor='username'></Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        id='signupformusername'
                        onChange={handleSignupInput}
                        value={signupFormData.username}
                        //onBlur={invalidUsername}
                        required
                    />
                    <Form.Control.Feedback type='invalid' id='signupusernameerror' className='hidden'>Username is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'></Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Your email address'
                        name='email'
                        id='signupformemail'
                        onChange={handleSignupInput}
                        value={signupFormData.email}
                        //onBlur={invalidEmail}
                        required
                    />
                    <Form.Control.Feedback type='invalid' id='signupemailerror' className='hidden'>Email is required</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='password'></Form.Label>
                    <Form.Control 
                        type='password'
                        placeholder='Your password'
                        name='password'
                        onChange={handleSignupInput}
                        value={signupFormData.password}
                        id='signupformpassword'
                        //onBlur={invalidPassword}
                        required
                    />
                    <Form.Control.Feedback type='invalid' id='signuppassworderror' className='hidden'>Password is required!</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='location'></Form.Label>
                    <Form.Control
                        type='location'
                        placeholder='Your address'
                        name='location'
                        onChange={handleSignupInput}
                        value={signupFormData.location}
                        //onBlur={invalidLocation}
                        required
                    />
                    <Form.Control.Feedback type='invalid' id='signuplocationerror' className='hidden'>An address is required!</Form.Control.Feedback>
                </Form.Group>

                <Button
                    disabled={!(signupFormData.username && signupFormData.email && signupFormData.password && signupFormData.location)}
                    type='submit'
                    variant='success'
                >
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default SignupForm

