const express = require('express');
const propiedadController = require('../controllers/propertyController');

const router = express.Router();

// Rutas para propiedades
router.get('/propiedades', propiedadController.getPropiedades);
// Agregar otras rutas según tus necesidades

module.exports = router;