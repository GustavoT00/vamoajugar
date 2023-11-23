import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import PropertyDetails from '../../components/PropertyDetails/PropertyDetails';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import LoginModal from '../../components/LoginModal/LoginModal';

const PropertyPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticación
    // Actualiza el estado de isLoggedIn cuando el usuario inicia sesión
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <div className="container mt-5">
        <h2>Nombre de la Propiedad</h2>
        {/* Fotos de la propiedad */}
        <div className="property-photos">
          {/* Aquí van las fotos de la propiedad */}
        </div>

        {/* Descripción de la propiedad */}
        <PropertyDetails
          pricePerHour="$50"
          address="Calle Principal 123"
          locationMap={{ lat: 7.067, lng: -73.867 }}
        />

        {/* Formulario de reserva */}
        {isLoggedIn ? (
          <ReservationForm />
        ) : (
          <p>Debes iniciar sesión para hacer una reserva.</p>
        )}
      </div>

      {/* Modal de Login */}
      <LoginModal onLogin={handleLogin} />
    </div>
  );
};

export default PropertyPage;