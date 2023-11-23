const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propiedad: { type: mongoose.Schema.Types.ObjectId, ref: 'Propiedad', required: true },
  fecha: { type: Date, required: true },
  estado: { type: String, default: 'Pendiente' }, // Puede ser 'Pendiente', 'Aprobada', 'Cancelada', etc.
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;