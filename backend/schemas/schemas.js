module.exports = {
  Cliente: {
    type: "object",
    properties: {
      id: { type: "integer" },
      nome: { type: "string", example: "João" },
      email: { type: "string", example: "joao@example.com" },
      telefone: { type: "string", example: "123456789" },
      latitude: { type: "number", example: -23.5505 },
      longitude: { type: "number", example: -46.6333 },
    },
    required: ["nome", "email", "telefone"],
  },
  NovoCliente: {
    type: "object",
    properties: {
      nome: { type: "string", example: "Maria" },
      email: { type: "string", example: "maria@example.com" },
      telefone: { type: "string", example: "987654321" },
      latitude: { type: "number", example: -23.5505 },
      longitude: { type: "number", example: -46.6333 },
    },
    required: ["nome", "email", "telefone"],
  },
};
