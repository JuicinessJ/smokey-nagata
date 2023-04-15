import { gql } from "@apollo/client";

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
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $location: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      location: $location
    ) {
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
  mutation addPost(
    $make: String!
    $model: String!
    $year: Int!
    $color: String
    $condition: String
    $mileage: Int
  ) {
    addPost(
      make: $make
      model: $model
      year: $year
      color: $color
      condition: $condition
      mileage: $mileage
    ) {
      _id
    }
  }
`;

export const ADD_BID = gql`
  mutation addBid($postId: ID!, $amount: Int!) {
    addBid(postId: $postId, amount: $amount) {
      _id
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const REMOVE_BID = gql`
  mutation removeBid($postId: ID!, $bidId: ID!) {
    removeBid(postId: $postId, bidId: $bidId) {
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost(
    $postId: ID!
    $make: String!
    $model: String!
    $year: Int!
    $color: String
    $condition: String
    $mileage: Int
  ) {
    updatePost(
      postId: $postId
      make: $make
      model: $model
      year: $year
      color: $color
      condition: $condition
      mileage: $mileage
    ) {
      _id
    }
  }
`;
