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

    }
    
    return (
        <>
        </>
    );
};

export default SignupForm

