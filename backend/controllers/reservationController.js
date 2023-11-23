const Reserva = require('../models/Reservation');

// Controlador para obtener todas las reservas
exports.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};