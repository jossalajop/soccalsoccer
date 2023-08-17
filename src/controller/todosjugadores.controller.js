const todosjugadoresCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

todosjugadoresCtl.showtodosjugadores = (reg, res)=>{
    res.render('todosjugadores');
}



module.exports = todosjugadoresCtl