import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    location
    username
    posts {
      _id
      year
      username
      model
      mileage
      make
      condition
      createdAt
      color
      image
      bids {
        _id
        amount
        username
      }
    }
  }
}
`;

export const QUERY_ALL_POSTS = gql`
  query getAllPosts {
  posts {
    _id
    bids {
      _id
      amount
      createdAt
      username
    }
    color
    condition
    createdAt
    make
    mileage
    model
    username
    year
    image
  }
}
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
  post(postId: $postId) {
    _id
    bids {
      _id
      amount
      createdAt
      username
    }
    color
    condition
    createdAt
    make
    mileage
    model
    username
    year
    image
  }
}
`;