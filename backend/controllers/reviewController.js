const Reseña = require('../models/Review');

// Controlador para obtener todas las reseñas
exports.getReseñas = async (req, res) => {
  try {
    const reseñas = await Reseña.find();
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};