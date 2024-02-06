const sequalize = require("../util/database");
const Sequalize = require("sequelize");

const User = sequalize.define("User", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  FirstName: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  LastName: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  Password: {
    type: Sequalize.TEXT(),
    allowNull: false,
  },
});

module.exports = User;
