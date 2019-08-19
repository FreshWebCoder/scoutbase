const authResolvers = require('./authentication');
const movieResolvers = require('./movies');

module.exports = [authResolvers, movieResolvers];
