const cuarto = (sequelize, type) => {
    return sequelize.define(
      "cuartos",
      {
        id_cuarto: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        estado: type.STRING,
  
        creacionCuarto: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarCuarto: {
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
  
  module.exports = cuarto;
  