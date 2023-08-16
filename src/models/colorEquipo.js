const colorEquipo = (sequelize, type) => {
    return sequelize.define(
      "colorEquipos",
      {
        id_colorEquipo: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        color: type.STRING,
        tipoPosicioncolor: type.STRING,
   
        creacionColorEquipo: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarColorEquipo: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  };
  
  module.exports =colorEquipo;
  