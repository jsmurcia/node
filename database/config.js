const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS);
    console.log("base de datos online");
  } catch (error) {
    console.log("error", error);
    throw new error("Error al iniciar la base de datos");
  }
};
module.exports = {
  dbConnection,
};
