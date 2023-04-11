const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        location: String!
        cars: [Post]
    }

    type Post {
        _id: ID!
        make: String!
        model: String!
        year: Int!
        color: String
        mileage: Int
        createdAt: String
        username: String!
        bids: [Bid]!
    }

    type Bid {
        _id: ID
        username: String!
        amount: Int!
        createdAt: String
  }


    type Auth {
        token: ID!
        user: User!
    }

    type Query {
        me: User
        posts(username: String): [Post]
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
            mileage: Int,
            username: String!): Post
        addBid(
            postId: ID!,
            amount: Int!,
            username: String!): Post
        removePost(postId: ID!): Post
        removebid(postId: ID!, bidId: ID!): Post
        removeUser(userId: ID!)
    }
`;

module.exports = typeDefs;