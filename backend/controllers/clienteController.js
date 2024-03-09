const Cliente = require('../models/clienteModel');

const clienteController = {
    getAll: (req, res) => {
        Cliente.getAll((err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json(results);
        });
    },
    getById: (req, res) => {
        const id = req.params.id;
        Cliente.getById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (!result.length) {
                res.status(404).json({ message: 'Cliente não encontrado' });
                return;
            }
            res.status(200).json(result[0]);
        });
    },
    create: (req, res) => {
        const novoCliente = req.body;
      
        Cliente.create(novoCliente, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({ message: 'Cliente criado com sucesso', id: result.insertId });
        });
    },
};

module.exports = clienteController;
