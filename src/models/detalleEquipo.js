const detalleEquipo = (sequelize, type) => {
    return sequelize.define(
      "detallesEquipos",
      {
        id_detalleEquipo: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: type.STRING,
        celular: type.INTEGER,
   
        creacionDetalleEquipo: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarDetalleEquipo: {
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
  
  module.exports =detalleEquipo;
  