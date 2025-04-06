const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clients');
const { validateClient } = require('../middlewares/validateClient'); // Asegúrate de que este middleware exista o créalo
const isAuthenticated = require('../middlewares/isAuthenticated');

/**
 * @swagger
 * /clients:
 * get:
 * tags:
 * - Clients
 * summary: Obtiene todos los clientes
 * description: Devuelve una lista de todos los clientes almacenados.
 * responses:
 * 200:
 * description: Lista de clientes
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * type: object
 * properties:
 * _id:
 * type: string
 * firstName:
 * type: string
 * lastName:
 * type: string
 * email:
 * type: string
 * favoriteColor:
 * type: string
 * birthday:
 * type: string
 */
router.get('/', clientsController.getAllClients);

/**
 * @swagger
 * /clients/{id}:
 * get:
 * tags:
 * - Clients
 * summary: Obtiene un cliente por ID
 * description: Devuelve los detalles de un cliente específico.
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: ID del cliente a obtener
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Cliente encontrado
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * _id:
 * type: string
 * firstName:
 * type: string
 * lastName:
 * type: string
 * email:
 * type: string
 * favoriteColor:
 * type: string
 * birthday:
 * type: string
 * 404:
 * description: Cliente no encontrado
 */
router.get('/:id', clientsController.getSingleClient);

/**
 * @swagger
 * /clients:
 * post:
 * tags:
 * - Clients
 * summary: Crea un nuevo cliente
 * description: Crea un nuevo cliente con los datos proporcionados.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * firstName:
 * type: string
 * lastName:
 * type: string
 * email:
 * type: string
 * favoriteColor:
 * type: string
 * birthday:
 * type: string
 * responses:
 * 201:
 * description: ID del nuevo cliente creado
 * content:
 * application/json:
 * schema:
 * type: string
 */
router.post('/', isAuthenticated, validateClient, clientsController.createClient);

/**
 * @swagger
 * /clients/{id}:
 * put:
 * tags:
 * - Clients
 * summary: Actualiza un cliente por ID
 * description: Actualiza los datos de un cliente existente.
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: ID del cliente a actualizar
 * schema:
 * type: string
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * firstName:
 * type: string
 * lastName:
 * type: string
 * email:
 * type: string
 * favoriteColor:
 * type: string
 * birthday:
 * type: string
 * responses:
 * 204:
 * description: Cliente actualizado correctamente
 * 404:
 * description: Cliente no encontrado
 */
router.put('/:id', isAuthenticated, validateClient, clientsController.updateClient); 

/**
 * @swagger
 * /clients/{id}:
 * delete:
 * tags:
 * - Clients
 * summary: Elimina un cliente por ID
 * description: Elimina un cliente existente por su ID.
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: ID del cliente a eliminar
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Cliente eliminado correctamente
 * 404:
 * description: Cliente no encontrado
 */
router.delete('/:id', isAuthenticated, validateClient, clientsController.deleteClient);

module.exports = router;