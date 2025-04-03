const express = require('express');
const router = express.Router();
const clientsRoutes = require('./clients');
const productsRoutes = require('./products');


router.use('/clients', clientsRoutes);
router.use('/products', productsRoutes);

module.exports = router;
