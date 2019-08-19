const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Mutation {
    login(name: String!, password: String!): Token!
    createUser(name: String!, password: String!): Token!
  }

  type Token {
    token: String!
    user: User!
  }

  type User {
    id: ID!
    name: String!
  }
`;
