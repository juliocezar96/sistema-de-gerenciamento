const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const schemas = require('./schemas/schemas'); // Importe os esquemas definidos


const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Clientes',
            version: '1.0.0',
            description: 'Documentação da API de Clientes',
        },
        servers: [
            {
                url: 'http://localhost:3000', 
                description: 'Servidor Local',
            },
            
        ],
        
    },
    apis: ['./routes/*.js'], // Caminho para os arquivos de rota da aplicação
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-cliente', swaggerUi.serve, swaggerUi.setup(specs, { 
        // Adicione aqui os esquemas definidos
        components: {
            schemas: schemas
        }
    }));
};
