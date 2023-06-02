const Role = require('../models/role');
const Usuario = require('../models/usuario');


// Verificar si el rol existe
const esRoleValido = async (rol = '') => {
  const existeRol = await Role.findOne({ rol });
  if( !existeRol ) {
    throw new Error(`El rol ${rol} no está registrado en la BD`)
  }
}

// Verificar si el correo existe
const emailExiste = async (correo) => {
  const email = await Usuario.findOne({ correo });
  if( email ) {
    throw new Error(`El correo: ${correo} ya está registrado`)
  }
}

// Verificar si el correo existe
const existeUsuarioPorId = async ( id ) => {
  const existeUsuario = await Usuario.findById(id);
  if( !existeUsuario ) {
    throw new Error(`No existe el id: ${id}`)
  }
}
  

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
}