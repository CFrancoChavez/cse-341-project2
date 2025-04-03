const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const routes = require('./routes/index');
const { connectToDatabase } = require('./data/database'); // Importa la función de conexión

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectToDatabase()
    .then(() => console.log('Database connection initialized...'))
    .catch((err) => {
        console.error('Failed to initialize database connection:', err);
        process.exit(1); // Sale del proceso si falla la conexión
    });

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});