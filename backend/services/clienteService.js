const Cliente = require("../models/clienteModel");
const {
  getdistanciaEntreClientes,
  ordenarClientesPorOrdemVisitacao,
} = require("../utils/util");
const {
  forcaBrutaTSP,
  vizinhoMaisProximo,
  twoOpt,
} = require("../utils/algoritimosBusca");

const MAX_CLIENTES_PARA_FORCA_BRUTA = 9;

const clienteService = {
  buscarTodos: () => {
    return Cliente.buscarTodos();
  },

  buscarPorId: (id) => {
    return Cliente.buscarPorId(id);
  },

  criar: (novoCliente) => {
    return Cliente.criar(novoCliente);
  },

  montarOrdemVisitacaoClientes: async (clientes, empresa) => {
  
    const distanciaEntreClientes = getdistanciaEntreClientes([
      empresa,
      ...clientes,
    ]);

    let caminho = [];
    if (clientes.length <= MAX_CLIENTES_PARA_FORCA_BRUTA) {
      const brutalForcePath = forcaBrutaTSP(distanciaEntreClientes);
      caminho = brutalForcePath;
    } else {
      const caminhoVizinhoMaisProximo = vizinhoMaisProximo(
        distanciaEntreClientes
      );

      const rotaOptimizada = twoOpt(
        caminhoVizinhoMaisProximo,
        distanciaEntreClientes
      );
      caminho = rotaOptimizada;
    }

    const clientesOrdenados = ordenarClientesPorOrdemVisitacao(
      clientes,
      caminho
    );
    return [empresa, ...clientesOrdenados];
  },
};

module.exports = clienteService;
