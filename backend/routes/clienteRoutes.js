const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Retorna todos os clientes
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get("/", clienteController.buscarTodos);

/**
 * @swagger
 * /clientes/rotas:
 *   get:
 *     summary: Retorna uma lista de clientes na ordem de visitação
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get("/rotas", clienteController.montarOrdemVisitacaoClientes);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Retorna um cliente pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID do cliente a ser retornado
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *             $ref: '#/components/schemas/NovoCliente'
 *       404:
 *         description: Cliente não encontrado
 */
router.get("/:id", clienteController.buscarPorId);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoCliente'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cliente criado com sucesso
 *                 id:
 *                   type: integer
 *                   example: 1
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", clienteController.criar);

module.exports = router;
