const express = require('express');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/clienteRoutes');
const errorHandler = require('./utils/errorHandler');
const swaggerSetup = require('./swagger');
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/clientes', clienteRoutes);

app.use(errorHandler);

swaggerSetup(app);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
