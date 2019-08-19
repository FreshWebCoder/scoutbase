const { gql } = require('apollo-server-express');

const authSchema = require('./authentication');
const movieSchema = require('./movies');
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchema, authSchema, movieSchema];
