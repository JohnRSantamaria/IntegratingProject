const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diets", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    }
  },{
    timestamps: false
  });
}