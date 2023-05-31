const { response } = require('express')

const usuariosGet = (req, res = response) => {
  res.json({
    msg:'get Api - Controlador' 
  });
};

const usuariosPost = (req, res = response) => {

  const { nombre, edad } = req.body;

  res.status(201).json({
    msg:'post Api - Controlador',
    nombre,
    edad
  });
};

const usuariosPut = (req, res = response) => {

  const { id } = req.params

  res.json({
    msg:'put Api - Controlador',
    id
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg:'delete Api - Controlador'
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg:'patch Api - Controlador'
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
}