const semifinal = (sequelize, type) => {
    return sequelize.define(
      "semifinales",
      {
        id_semifinal: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        estado: type.STRING,
  
        creacionSemifinal: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarSemifinal: {
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
  
  module.exports = semifinal;
  