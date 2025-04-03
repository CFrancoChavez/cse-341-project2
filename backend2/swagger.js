const swaggerAutogen = require('swagger-autogen')();

const doc = {
  swagger: '2.0', // Especifica Swagger 2.0
  info: {
    title: 'Clients and Products API',
    description: 'Clients and Products API CRUD',
  },
  host: 'https://cse-341-project2-l4kz.onrender.com',
  basePath: '/',
  schemes: ['https'],
  definitions: { // Usar 'definitions' en lugar de 'components.schemas'
    Client: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        favoriteColor: { type: 'string' },
        birthday: { type: 'string' }
      }
    },
    ClientInput: {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        favoriteColor: { type: 'string' },
        birthday: { type: 'string' }
      }
    },
    Product: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        price: { type: 'number' },
        description: { type: 'string' },
        category: { type: 'string' }
      }
    },
    ProductInput: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        price: { type: 'number' },
        description: { type: 'string' },
        category: { type: 'string' }
      }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);