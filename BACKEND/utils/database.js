const Sequelize = require("sequelize");

const sequelize = new Sequelize("appointmentBooking", "root", "Shubham@@387", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
