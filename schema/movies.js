const { gql } = require('apollo-server-express');

module.exports = gql`
  directive @auth on FIELD_DEFINITION
  
  extend type Query {
    movies: [Movie!]
  }
  
  type Movie {
    scoutbase_rating: String! @auth
    title: String!
    year: String!
    rating: String!
    actors: [Actor!]
  }
  
  type Actor {
    name: String!
    birthday: String!
    country: String!
    directors: [Director!]
  }
  
  type Director {
    name: String!
    birthday: String!
    country: String!
  }
`;
