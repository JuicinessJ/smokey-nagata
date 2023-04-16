// import models here
const { User, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

// match auth in utils
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // return all users
    users: async () => {
      return User.find().populate("posts");
    },

   // query my profile and posts
    me: async (package, args, context) => {
      if (context.user) {
        return User.findOne({
          _id: context.user._id,
        }).populate("posts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // query all posts by all users
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    // query a single post by postId
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    // add a user
    addUser: async (parent, { username, email, password, location }) => {
      const user = await User.create({ username, email, password, location });
      const token = signToken(user);
      return { token, user };
    },
    // login with user
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
    // add a car post
    addPost: async (
      parent,
      { make, model, year, color, condition, mileage, image },
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
          image,
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
    // add a bid to the post by postId
    addBid: async (parent, { postId, amount }, context) => {
      if (context.user) {
        return await Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              bids: { username: context.user.username, amount },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // remove post by postId
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
      throw new AuthenticationError("You need to be logged in!");
    },
    // remove bid by bidId
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
          { new: true,
            runValidators: true}
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // update post by postId
    updatePost: async (
      parent,
      { postId, make, model, year, color, condition, mileage },
      context
    ) => {
      if (context.user) {
        return await Post.findByIdAndUpdate(
          postId,
          { make: make,
            model: model,
            year: year,
            color: color,
            condition: condition,
            mileage: mileage },
          { new: true,
          runValidators: true}
        );
      };
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
