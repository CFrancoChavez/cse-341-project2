const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');
const isAuthenticated = require('../middlewares/isAuthenticated');
const { validateProduct } = require('../middlewares/validateProduct');

/**
 * @swagger
 * /products:
 * get:
 * tags:
 * - Products
 * summary: Obtiene todos los productos
 * description: Devuelve una lista de todos los productos almacenados.
 * responses:
 * 200:
 * description: Lista de productos
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * type: object
 * properties:
 * _id:
 * type: string
 * name:
 * type: string
 * price:
 * type: number
 * description:
 * type: string
 * category:
 * type: string
 */
router.get('/', productsController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 * get:
 * tags:
 * - Products
 * summary: Obtiene un producto por ID
 * description: Devuelve los detalles de un producto específico.
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: ID del producto a obtener
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Producto encontrado
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * _id:
 * type: string
 * name:
 * type: string
 * price:
 * type: number
 * description:
 * type: string
 * category:
 * type: string
 * 404:
 * description: Producto no encontrado
 */
router.get('/:id', productsController.getSingleProduct);

/**
 * @swagger
 * /products:
 * post:
 * tags:
 * - Products
 * summary: Crea un nuevo producto
 * description: Crea un nuevo producto con los datos proporcionados.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * name:
 * type: string
 * price:
 * type: number
 * description:
 * type: string
 * category:
 * type: string
 * responses:
 * 201:
 * description: ID del nuevo producto creado
 * content:
 * application/json:
 * schema:
 * type: string
 */
router.post('/', isAuthenticated, validateProduct, productsController.createProduct);

/**
 * @swagger
 * /products/{id}:
 * put:
 * tags:
 * - Products
 * summary: Actualiza un producto por ID
 * description: Actualiza los datos de un producto existente.
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: ID del producto a actualizar
 * schema:
 * type: string
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * name:
 * type: string
 * price:
 * type: number
 * description:
 * type: string
 * category:
 * type: string
 * responses:
 * 204:
 * description: Producto actualizado correctamente
 * 404:
 * description: Producto no encontrado
 */
router.put('/:id', isAuthenticated, validateProduct, productsController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 * delete:
 * tags:
 * - Products
 * summary: Elimina un producto por ID
 * description: Elimina un producto existente por su ID.
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: ID del producto a eliminar
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Producto eliminado correctamente
 * 404:
 * description: Producto no encontrado
 */
router.delete('/:id', isAuthenticated, productsController.deleteProduct);

module.exports = router;
