import React, { useState } from 'react';

const Reserva = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleReserva = () => {
    // Aquí puedes colocar la lógica para enviar la reserva a tu servidor
    const reservaData = {
      nombre,
      fecha,
      mensaje
    };
    // Llamar a la función de reserva o enviarla a través de una API
    console.log(reservaData);
    alert("Reserva realizada con éxito!");
  }

  return (
    <div>
      <h2>Reserva</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input 
          type="text" 
          className="form-control" 
          id="nombre" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fecha">Fecha</label>
        <input 
          type="date" 
          className="form-control" 
          id="fecha" 
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea 
          className="form-control" 
          id="mensaje" 
          rows="3" 
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleReserva}>Reservar</button>
    </div>
  );
}

export default Reserva;