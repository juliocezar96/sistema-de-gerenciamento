const Empresa = require("../models/empresaModel");

const empresaService = {
  buscarTodos: () => {
    return Empresa.buscarTodos();
  },
};

module.exports = empresaService;
