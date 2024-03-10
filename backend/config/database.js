const { Pool } = require("pg");

// Configuração da conexão
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "postgres",
  port: 5432,
});

// Testando a conexão
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err.stack);
  } else {
    console.log("Conectado ao banco de dados PostgreSQL:", res.rows[0]);
  }
});

module.exports = pool;
