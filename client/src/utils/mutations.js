import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!) {
  addUser(username: $username) {
    email
    username
    password
  }
}
`;