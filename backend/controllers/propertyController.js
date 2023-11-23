const Propiedad = require('../models/Property');

// Controlador para obtener todas las propiedades
exports.getPropiedades = async (req, res) => {
  try {
    const propiedades = await Propiedad.find();
    res.json(propiedades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};