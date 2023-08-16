const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require('path')
const CryptoJS = require('crypto-js')

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/database.sql')
const helpers = require("./helpers");


passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req,username,password, done) => {
      const rows = await orm.usuario.findOne({ where: {username: username } });
      if (rows) {
        const usuario = rows;
        const contraseña = await CryptoJS.AES.decrypt(usuario.contraseña, 'secret');
        const validPassword = contraseña.toString(CryptoJS.enc.Utf8);
        console.log(validPassword+'HOLA')
        if (validPassword == password) {
          done(null, usuario, req.flash("message", "Bienvenido" + " " + usuario.username));
        } else {
          done(null, false, req.flash("message", "Datos incorrectos"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El nombre de usuario no existe.")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req,username,password, done) => {
      const usuario = await orm.usuario.findOne({ where: {username:username } });
      if (usuario === null) {
        const {  nombresUsuario,apellidosUsuario} = req.body
        let creacionUsuario = {
           nombresUsuario,
           apellidosUsuario, 
           username:username,
           password:password
           
        };
        creacionUsuario.nombresUsuario = await helpers.encryptPassword(nombresUsuario);
        creacionUsuario.apellidosUsuario = await helpers.encryptPassword(apellidosUsuario);
        creacionUsuario.password= await helpers.encryptPassword(password);

        const resultado = await orm.usuario.create(creacionUsuario);
        creacionUsuario.id = resultado.insertId;

        return done(null, creacionUsuario);
      } else {
        if (usuario) {
          const usuarios = usuario
          if (usuarios.apodoUsuario == username) {
            done(null, false, req.flash("message", "El nombre de usuario ya existe."))
          } else {
            const {  nombresUsuario,apellidosUsuario} = req.body
            let creacionUsuario = {
               nombresUsuario,
               apellidosUsuario, 
               username:username,
               password:password
               
            };
            creacionUsuario.nombresUsuario = await helpers.encryptPassword(nombresUsuario);
            creacionUsuario.apellidosUsuario = await helpers.encryptPassword(apellidosUsuario);
            creacionUsuario.password= await helpers.encryptPassword(password);
    
            const resultado = await orm.usuario.create(creacionUsuario);
            creacionUsuario.id = resultado.insertId;
    
            return done(null, creacionUsuario);
          }
        }
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});



