const todosjugadoresCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

todosjugadoresCtl.showtodosjugadores = (reg, res)=>{
    res.render('jugador/todosjugadores');
}



module.exports = todosjugadoresCtl