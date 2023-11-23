const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // ... campos del usuario
});

const User = mongoose.model('User', userSchema);

module.exports = User;
module.exports = model('Usuario', UsuarioSchema)