'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert('movies', [{
      title: 'Movie 1',
      year: 2016,
      rating: 4.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Movie 2',
      year: 2019,
      rating: 4.2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Movie 3',
      year: 2014,
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    queryInterface.bulkInsert('actors', [{
      name: 'actor 1',
      birthday: '1980-01-01',
      country: 'United Kingdom',
      movie_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'actor 2',
      birthday: '1982-04-13',
      country: 'United States',
      movie_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'actor 3',
      birthday: '1990-05-23',
      country: 'United States',
      movie_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'actor 4',
      birthday: '1985-06-21',
      country: 'United States',
      movie_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'actor 5',
      birthday: '1979-10-08',
      country: 'United Kingdom',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    return queryInterface.bulkInsert('directors', [{
      name: 'director 1',
      birthday: '1970-05-05',
      country: 'United Kingdom',
      actor_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'director 2',
      birthday: '1972-04-19',
      country: 'United Kingdom',
      actor_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'director 3',
      birthday: '1980-07-16',
      country: 'United States',
      actor_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'director 4',
      birthday: '1975-03-09',
      country: 'United States',
      actor_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'director 5',
      birthday: '1969-02-27',
      country: 'United States',
      actor_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
