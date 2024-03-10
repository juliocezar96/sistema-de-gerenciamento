const db = require("../config/database");

const Empresa = {
  async buscarTodos() {
    try {
      const query = `
        SELECT c.*, l.latitude, l.longitude 
        FROM empresas c 
        LEFT JOIN geolocalizacao l ON c.geolocalizacaoId = l.id
      `;
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error("Erro ao obter empresa por ID:", error);
      throw new Error("Erro ao obter empresa por ID");
    }
  },
};

module.exports = Empresa;
