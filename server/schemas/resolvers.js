// import models here
 const {  User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

// match auth in utils
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (package, args, context) => {
      if (context.user) {
        return User.findOne({
          _id: context.user._id
        })
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password, location}) => {
      const user = await User.create({ username, email, password, location});
      const token = signToken(user);
      return { token, user};
    }
  }
};

module.exports = resolvers;