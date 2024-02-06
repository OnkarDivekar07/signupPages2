//database connection setup through sequalize
const Sequalize = require("sequelize");

const sequalize = new Sequalize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_Password,
  {
    dialect: "mysql",
    host: process.env.HOST,
    logging: false,
  }
);

module.exports = sequalize;
