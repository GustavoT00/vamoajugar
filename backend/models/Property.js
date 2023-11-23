const mongoose = require('mongoose');

const propiedadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  valorPorHora: { type: Number, required: true },
  ciudad: { type: String, required: true },
  propietario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Propiedad = mongoose.model('Propiedad', propiedadSchema);

module.exports = Propiedad;