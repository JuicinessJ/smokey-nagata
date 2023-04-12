// import models here
const { User, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

// match auth in utils
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (package, args, context) => {
      if (context.user) {
        return User.findOne({
          _id: context.user._id,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, location }) => {
      const user = await User.create({ username, email, password, location });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

       if (!correctPw) {
         throw new AuthenticationError("Incorrect credentials");
       }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (
      parent,
      { make, model, year, color, condition, mileage },
      context
    ) => {
      if (context.user) {
        const post = await Post.create({
          make,
          model,
          year,
          color,
          condition,
          mileage,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addBid: async (parent, { postId, amount }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              bids: { amount, username: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBid: async (parent, { postId, bidId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              bids: {
                _id: bidId,
                username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
