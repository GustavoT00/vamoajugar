const mongoose = require('mongoose');

const reseñaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propiedad: { type: mongoose.Schema.Types.ObjectId, ref: 'Propiedad', required: true },
  calificacion: { type: Number, required: true },
  descripcion: { type: String, required: true },
});

const Reseña = mongoose.model('Reseña', reseñaSchema);

module.exports = Reseña;