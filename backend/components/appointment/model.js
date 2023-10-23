module.exports = (sequelize, Sequelize) => {
  //Appointments Schema
  const Appointment = sequelize.define('appointment', {
    //attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    contactNo: {
      type: Sequelize.INTEGER,
    },
    numberOfPerson: {
      type: Sequelize.INTEGER,
    },
    tableType: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    notes: {
      type: Sequelize.STRING,
    },
    isConfirm: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    }
  });

  return Appointment;
};
