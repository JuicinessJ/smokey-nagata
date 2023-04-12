import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      cars {
        _id
      }
      email
      location
      password
      username
    }
  }
`;
export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
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
        amount
        createdAt
        username
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  query getAllPosts {
    posts {
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
        amount
        createdAt
        username
      }
    }
  }
`;
