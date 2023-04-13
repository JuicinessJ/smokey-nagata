import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query getPOSTS {
    posts {
      _id
      postTitle
      postUser
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePOST($postId: ID!) {
    post(postId: $postId) {
      _id
      make
      model
      year
      color
      condition
      mileage
      createdAt
      username
      bids {
        _id
        username
        amount
        createdAt
      }
    }
  }
`;