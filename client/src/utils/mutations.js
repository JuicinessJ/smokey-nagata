import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
    }
  }
}
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $location: String!) {
  addUser(username: $username, email: $email, password: $password, location: $location) {
    token
    user {
      _id
      email
      password
    }
  }
}
`;