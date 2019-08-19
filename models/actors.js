'use strict';
module.exports = (sequelize, DataTypes) => {
  const actors = sequelize.define('actors', {
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    country: DataTypes.STRING,
    movie_id: DataTypes.INTEGER
  }, {});
  actors.associate = function(models) {
    // associations can be defined here
  };
  return actors;
};