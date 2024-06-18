const Role = require("../models/role");
const usuario = require("../models/usuario");

const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });

  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la DB`);
  }
};

const emailExiste = async (correo = "") => {
  const existeUsuario = await usuario.findOne({ correo });
  if (existeUsuario) {
    throw new Error(`El correo: ${id}, ya esta registrado`);
  }
};

const existeUsuarioPorId = async (id = "") => {
  const existeUsuario = await Role.findById(id);

  if (!existeUsuario) {
    throw new Error(`EL id: ${id} no existe`);
  }
};

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
};
