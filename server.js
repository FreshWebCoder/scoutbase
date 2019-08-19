const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const logger = require('morgan');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const schema = require('./schema');
const resolvers = require('./resolvers');
const directives = require('./directives');

const app = express();
const PORT = process.env.PORT || 8000;

// Add Database
// =============================================================
let db = require("./models");

// Use Morgan to log requests
let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {"flags": "a"});

//  Set Morgan to output to access.log file and to console
app.use(logger("common", {"stream": accessLogStream}));
app.use(logger("dev"));

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  schemaDirectives: directives,
  context: async ({ req }) => {
    const token = req.headers['x-token'];
    let authenticated = false;
    if (token) {
      try {
        authenticated = !!(await jwt.verify(token, process.env.SECRET))
      } catch (e) {
        authenticated = false;
      }
    }

    return {
      models: db,
      secret: process.env.SECRET,
      authenticated
    }
  }
});

server.applyMiddleware({ app, path: '/graphql' });

db.sequelize.sync({ force: false }).then(function() {
  app.listen({ port: PORT }, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
