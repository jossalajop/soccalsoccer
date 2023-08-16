const usuario=(sequelize,type)=>{
    return sequelize.define('usuarios',
    {
        id_usuario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        
        username:type.STRING ,
        password: type.STRING,
        nombresUsuario:type.STRING ,
        apellidosUsuario:type.STRING, 

        creacionUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = usuario;