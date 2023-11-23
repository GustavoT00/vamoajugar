const express = require('express');
const reseñaController = require('../controllers/reservationController');

const router = express.Router();

// Rutas para reseñas
router.get('/reseñas', reseñaController.getReseñas);
// Agregar otras rutas según tus necesidades

module.exports = router;