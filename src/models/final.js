const final = (sequelize, type) => {
    return sequelize.define(
      "finales",
      {
        id_final: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        estado: type.STRING,
  
        creacionFinal: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarFinal: {
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
  
  module.exports = final;
  