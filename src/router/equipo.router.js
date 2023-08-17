const express = require("express");
const router = express.Router();
const equipoController = require("../controller/equipo.controller");
const pool = require("../Database/dataBase.sql");

//EQUIPO//
router.get("/", equipoController.getListEquipos);
router.post("/equipo", equipoController.postEquipo);

//SE MOSTRARA LA LISTA//
router.get('/list-equipos', async(req, res) => {
    const result = await pool.query('SELECT * FROM EQUIPOS');
    res.render('equipo/list-equipos', {equipos})
});

//ELIMINAR//
router.get('/delete-equipos/:id_equipos', equipoController.deleteEquipo)

//editar//
router.get('*/edit-equipo/:id_equipo', equipoController.getEquipo);
router.post('/edit-equipos/:id_equipo', equipoController.updateEquipo);

module.exports = router;


