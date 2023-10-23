
module.exports = (sequelize, Sequelize) => {
  //User Schema
  const Users = sequelize.define('users', {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Users;
};
