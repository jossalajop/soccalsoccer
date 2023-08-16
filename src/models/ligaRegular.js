const ligaRegular = (sequelize, type) => {
    return sequelize.define(
      "ligaRegulares",
      {
        id_ligaRegular: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        estado: type.STRING,
  
        creacionLigaRegular: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarLigaRegular: {
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
  
  module.exports = ligaRegular;
  