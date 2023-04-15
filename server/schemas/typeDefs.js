const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        location: String!
        posts: [Post]
    }

    type Post {
        _id: ID!
        make: String!
        model: String!
        year: Int!
        color: String
        mileage: Int
        condition: String
        createdAt: String
        username: String!
        bids: [Bid]
    }

    type Bid {
        _id: ID!
        username: String!
        amount: Int!
        createdAt: String
  }


    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        me: User
        posts(username: String): [Post]
        post(postId: ID!): Post
    }

    type Mutation {
        addUser(
            username: String!,
            email: String!,
            password: String!,
            location: String!,): Auth
        login(
            email: String!,
            password: String!): Auth
        addPost(
            make: String!,
            model: String!,
            year: Int!,
            color: String,
            condition: String,
            mileage: Int,): Post
        addBid(
            postId: ID!,
            amount: Int!): Post
        removePost(postId: ID!): Post
        removeBid(postId: ID!, bidId: ID!): Post
        updatePost(
            postId: ID!,
            make: String,
            model: String,
            year: Int,
            color: String,
            condition: String,
            mileage: Int): Post
    }
`;

module.exports = typeDefs;