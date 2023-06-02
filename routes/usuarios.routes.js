const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
} = require('../controllers/usuarios.controllers');

const router = Router();


router.get('/', usuariosGet);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe contener más de 5 letras').isLength({ min:6 }),
  check('correo', 'El correo no es válido').isEmail(),
  check('rol').custom( esRoleValido ),
  check('correo').custom( emailExiste ),
  validarCampos
], usuariosPost);

router.put('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  check('rol').custom( esRoleValido ),
  validarCampos
], usuariosPut);

router.delete('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;