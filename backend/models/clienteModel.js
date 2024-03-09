const db = require('../config/database');

const Cliente = {
    getAll: (callback) => {
        db.query('SELECT c.*, g.latitude, g.longitude FROM clientes c LEFT JOIN geolocalizacaoCliente g ON c.id = g.clienteId', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT c.*, g.latitude, g.longitude FROM clientes c LEFT JOIN geolocalizacaoCliente g ON c.id = g.clienteId WHERE c.id = ?', [id], callback);
    },
    create: (novoCliente, callback) => {
        db.query('INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)', 
                 [novoCliente.nome, novoCliente.email, novoCliente.telefone], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }

            if (novoCliente.latitude && novoCliente.longitude) {
                console.log(novoCliente)
                db.query('INSERT INTO geolocalizacaoCliente (clienteId, latitude, longitude) VALUES (?, ?, ?)', 
                         [result.insertId, novoCliente.latitude, novoCliente.longitude], (err, result) => {
                    if (err) {
                        console.error('Erro ao inserir geolocalização do cliente: ', err);
                        
                    }
                });
            }

            callback(null, { insertId: result.insertId });
        });
    }
};

module.exports = Cliente;
