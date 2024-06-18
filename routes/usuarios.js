const { Router } = require("express");

const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
} = require("../controllers/usuarios");
const { check } = require("express-validator");
const {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
} = require("../helpers/db-validators");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/", usuariosGet);

router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(esRoleValido),
    validarCampos
  ],
  usuariosPut
);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser de mas de 6 letras").isLength({
      min: 6
    }),
    check("correo", "El valor ingresado no es un correo valido").isEmail(),
    check("correo").custom(emailExiste),
    check("rol").custom(esRoleValido),
    validarCampos
  ],
  usuariosPost
);

router.delete("/",[
  check("id", "No es un ID valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
  validarCampos
], usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
