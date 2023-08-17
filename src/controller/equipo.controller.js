const pool = require("../Database/dataBase.sql");
const equipo = require("../models/equipo");

const Equipos = {}

Equipos.getListEquipos = (req, res) => {
    res.render("equipo/equipos");
};

Equipos.postEquipo = async (req, res) => {
    const {
        foto,
        nombre,
        categoria,
        serie,
        iniciales,
        descripcion,
        correo,
        fecha_creacion,
        color_principal,
        color_segundario,
        telefono,
    } = req.body;
    const newLink = {
        foto,
        nombre,
        categoria,
        serie,
        iniciales,
        descripcion,
        correo,
        fecha_creacion,
        color_principal,
        color_segundario,
        telefono,
    };
    await pool.query('INSERT INTO equipos set ?', [newLink]);
    //flash
    req.flash('succes', 'Agregado Correctamente');
    res.redirect("/equipos/list-equipos");
};

Equipos.deleteEquipo = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM equipos WHERE ID = ?", [id]);
    req.flash('success', 'Eliminado correctamente');
    res.redirect("/equipos/list-equipos");
};

Equipos.getEquipo = async (req, res) => {
    const { id } = req.params;
    const equipo = await pool.query('SELECT * FROM equipos WHERE id = ?', [id]);
    res.render('equipo/edit-equipos', { equipo: equipo[0] });

};
Equipos.updateEquipo = async (req, res) => {
    const { id } = req.params;
    const { serealizalavista} = req.body;
    const newLink = {serealizalavista};
    console.log({ id, newLink })
    await pool.query('UPDATE equios set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Editado Correctamenta');
    res.redirect('/equipos/list-equipos');
};
module.exports = Equipos