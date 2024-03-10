const db = require("../config/database");

const Cliente = {
  async buscarTodos() {
    try {
      const query = `
        SELECT c.*, l.latitude, l.longitude 
        FROM clientes c 
        LEFT JOIN geolocalizacao l ON c.geolocalizacaoId = l.id
      `;
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error("Erro ao obter todos os clientes:", error);
      throw new Error("Erro ao obter todos os clientes");
    }
  },

  async buscarPorId(id) {
    try {
      const query = `
        SELECT c.*, l.latitude, l.longitude 
        FROM clientes c 
        LEFT JOIN geolocalizacao l ON c.geolocalizacaoId = l.id
        WHERE c.id = $1
      `;
      const { rows } = await db.query(query, [id]);
      return rows[0] || null;
    } catch (error) {
      console.error("Erro ao obter cliente por ID:", error);
      throw new Error("Erro ao obter cliente por ID");
    }
  },

  async criar(novoCliente) {
    try {
      const geoQuery = `
        INSERT INTO geolocalizacao (latitude, longitude) 
        VALUES ($1, $2)
        RETURNING id
      `;
      const { rows } = await db.query(geoQuery, [
        novoCliente.latitude,
        novoCliente.longitude,
      ]);
      const geolocalizacaoId = rows[0].id;

      const insertQuery = `
        INSERT INTO clientes (nome, email, telefone, geolocalizacaoId) 
        VALUES ($1, $2, $3, $4) 
        RETURNING id
      `;
      const { rows: clienteRows } = await db.query(insertQuery, [
        novoCliente.nome,
        novoCliente.email,
        novoCliente.telefone,
        geolocalizacaoId,
      ]);
      const clienteId = clienteRows[0].id;

      return { insertId: clienteId };
    } catch (error) {
      console.error("Erro ao criar novo cliente:", error);
      throw new Error("Erro ao criar novo cliente");
    }
  },
};

module.exports = Cliente;
