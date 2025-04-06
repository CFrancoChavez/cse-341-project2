const express = require('express');
const router = express.Router();
const clientsRoutes = require('./clients');
const productsRoutes = require('./products');
const authRoutes = require('./auth');

router.use('/clients', clientsRoutes);
router.use('/products', productsRoutes);
router.use('/auth', authRoutes);

module.exports = router;
