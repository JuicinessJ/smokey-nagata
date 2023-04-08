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
    }
`;

module.exports = typeDefs;