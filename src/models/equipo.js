const equipo = (sequelize, type) => {
    return sequelize.define(
      "equipos",
      {
        id_equipo: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        foto: type.STRING,
        nombre: type.STRING,
        categoria: type.STRING,
        serie: type.STRING,
        iniciales: type.STRING,
        descripcion: type.STRING(3000),
        correo: type.STRING,
        fecha_creacion: type.INTEGER,       
  
        creacionEquipo: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarEquipo: {
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
  
  module.exports = equipo;
  