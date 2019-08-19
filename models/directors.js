'use strict';
module.exports = (sequelize, DataTypes) => {
  const directors = sequelize.define('directors', {
    name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    country: DataTypes.STRING,
    actor_id: DataTypes.INTEGER
  }, {});
  directors.associate = function(models) {
    // associations can be defined here
  };
  return directors;
};