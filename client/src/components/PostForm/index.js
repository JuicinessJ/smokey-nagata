import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CONTENT } from '../../utils/mutations';
import { QUERY_CONTENT, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';


const ContentForm = () => {
  const [contentText, setcontentText] = useState('');
















  return (
    <div>index</div>
  )
}

export default ContentForm