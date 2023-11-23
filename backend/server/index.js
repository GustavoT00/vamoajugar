const express = require('express');
const db = require('../database/db');
const userRoutes = require('../routes/user');
const reservaRoutes = require('../routes/reservation');
const propiedadRoutes = require('../routes/property');
const reseñaRoutes = require('../routes/review');

const app = express();
const PORT = process.env.PORT || 3000;


db();


app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', reservaRoutes);
app.use('/api', propiedadRoutes);
app.use('/api', reseñaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});