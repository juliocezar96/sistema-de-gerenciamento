const ClienteService = require("../services/clienteService");
const EmpresaService = require("../services/empresaService");

const clienteController = {
  buscarTodos: async (req, res) => {
    try {
      const results = await ClienteService.buscarTodos();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  buscarPorId: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await ClienteService.buscarPorId(id);
      if (!result) {
        res.status(404).json({ message: "Cliente não encontrado" });
        return;
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  criar: async (req, res) => {
    const novoCliente = req.body;
    try {
      const result = await ClienteService.criar(novoCliente);
      res
        .status(201)
        .json({ message: "Cliente criado com sucesso", id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  montarOrdemVisitacaoClientes: async (req, res) => {
    try {
      const empresas = await EmpresaService.buscarTodos();
      const empresa = empresas[0]; // apenas um exemplo de empresa como ponto de partida
      const clientes = await ClienteService.buscarTodos();
      const results = await ClienteService.montarOrdemVisitacaoClientes(
        clientes,
        empresa
      );
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = clienteController;
