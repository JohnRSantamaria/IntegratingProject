const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isNumeric:true,
        len:[0,100]
      }
    },
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    steps:{
      type: DataTypes.JSON,
      allowNull: false
    }

  },{
    timestamps: false
  });
};
