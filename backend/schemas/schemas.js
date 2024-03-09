module.exports = {

  Cliente: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      nome: { type: 'string' },
      email: { type: 'string' },
      telefone: { type: 'string' },
      latitude: { type: 'number' },
      longitude: { type: 'number' }
    },
    required: ['nome', 'email', 'telefone']
  },
  NovoCliente: {
    type: 'object',
    properties: {
      nome: { type: 'string' },
      email: { type: 'string' },
      telefone: { type: 'string' },
      latitude: { type: 'number' },
      longitude: { type: 'number' }
    },
    required: ['nome', 'email', 'telefone']
  }
};
