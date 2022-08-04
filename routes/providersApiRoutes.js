const express = require('express');
// Rutas de productos
const providersApiController = require("../controllers/providersApiController");
const providersApiRouter = express.Router();

const checkApiKey = require('../middlewares/auth_API_KEY');

// /products API
providersApiRouter.get('/:id?', providersApiController.getProvider);
providersApiRouter.post('/', checkApiKey, providersApiController.createProvider);
// productsApiRouter.delete('/',checkApiKey, productsApiController.deleteProduct);

module.exports = providersApiRouter;

/*
http://localhost:3000/api/products --> GET /products
http://localhost:3000/api/products/3 --> GET /products/3
http://localhost:3000/api/products --> POST /products
http://localhost:3000/api/products --> DELETE /products
*/