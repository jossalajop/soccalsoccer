const octavo = (sequelize, type) => {
    return sequelize.define(
      "octavos",
      {
        id_octavo: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        estado: type.STRING,
  
        creacionOctavo: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarOctavo: {
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
  
  module.exports = octavo;
  