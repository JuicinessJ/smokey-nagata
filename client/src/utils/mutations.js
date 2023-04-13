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

export const ADD_POST = gql`
  mutation AddPost($make: String!, $model: String!, $year: Int!, $username: String, $color: String, $condition: String, $mileage: Int) {
  addPost(make: $make, model: $model, year: $year, username: $username, color: $color, condition: $condition, mileage: $mileage) {
    _id
    color
    createdAt
    make
    mileage
    model
    username
    year
    bids {
      _id
    }
  }
}
`;

export const ADD_BID = gql`
  mutation AddBid($postId: ID!, $amount: Int!, $username: String!) {
  addBid(postId: $postId, amount: $amount, username: $username) {
    _id
  }
}
`;