const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

//const sequelize = new Sequelize(MYSQL_URI);

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});


const usuariosModelo = require('../models/usuario')
const colorEquiposModelo = require('../models/colorEquipo')
const detalleEquiposModelo = require('../models/detalleEquipo')
const equiposModelo = require('../models/equipo')
const jugadoresModelo = require('../models/jugador')
const finalesModelo = require('../models/final')
const semifinalesModelo = require('../models/semifinal')
const cuartosModelo = require('../models/cuarto')
const octavosModelo = require('../models/octavo')
const ligaRegularesModelo = require('../models/ligaRegular')


//sincronia//
const usuario = usuariosModelo(sequelize, Sequelize);
const colorEquipo = colorEquiposModelo(sequelize, Sequelize);
const detalleEquipo = detalleEquiposModelo(sequelize, Sequelize);
const equipo = equiposModelo(sequelize, Sequelize);
const jugador = jugadoresModelo(sequelize, Sequelize);
const final = finalesModelo(sequelize, Sequelize);
const semifinal = semifinalesModelo(sequelize, Sequelize);
const cuarto = cuartosModelo(sequelize, Sequelize);
const octavo = octavosModelo(sequelize, Sequelize);
const ligaRegular = ligaRegularesModelo(sequelize, Sequelize);


//Relaciones//
usuario.hasMany(jugador);
jugador.belongsTo(usuario);

usuario.hasMany(equipo);
equipo.belongsTo(usuario);

usuario.hasMany(detalleEquipo);
detalleEquipo.belongsTo(usuario);

usuario.hasMany(ligaRegular);
ligaRegular.belongsTo(usuario);

usuario.hasMany(octavo);
octavo.belongsTo(usuario);

usuario.hasMany(cuarto);
cuarto.belongsTo(usuario);

usuario.hasMany(semifinal);
semifinal.belongsTo(usuario);

usuario.hasMany(final);
final.belongsTo(usuario);

usuario.hasMany(semifinal);
semifinal.belongsTo(usuario);

equipo.hasMany(ligaRegular);
ligaRegular.belongsTo(equipo);

equipo.hasMany(octavo);
octavo.belongsTo(equipo);

equipo.hasMany(cuarto);
cuarto.belongsTo(equipo);

equipo.hasMany(semifinal);
semifinal.belongsTo(equipo);

equipo.hasMany(colorEquipo);
colorEquipo.belongsTo(equipo);

equipo.hasMany(final);
final.belongsTo(equipo);

detalleEquipo.hasMany(equipo);
equipo.belongsTo(detalleEquipo);



module.exports = {
	usuario,
	colorEquipo,
	detalleEquipo,
	equipo,
	jugador,
	final,
	semifinal,
	cuarto,
	octavo,
	ligaRegular
};
