const jugador = (sequelize, type) => {
    return sequelize.define(
      "jugadores",
      {
        id_jugador: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        foto: type.STRING,
        nombre: type.STRING,
        apellido: type.STRING,
        tipoJugador: type.STRING(3000),
        golesMarcados:type.INTEGER,
        edad:type.INTEGER,
        cedula:type.INTEGER,
  
        creacionJugador: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizarJugador: {
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
  
  module.exports = jugador;
  