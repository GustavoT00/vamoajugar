const express = require('express');
const reservaController = require('../controllers/reservationController');

const router = express.Router();

// Rutas para reservas
router.get('/reservas', reservaController.getReservas);
// Agregar otras rutas según tus necesidades

module.exports = router;