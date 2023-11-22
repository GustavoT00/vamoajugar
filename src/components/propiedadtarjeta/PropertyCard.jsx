import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <div className="property-details">
        <h3>{property.name}</h3>
        <p>{property.address}</p>
        <p>Rating: {property.rating}</p>
        <p>Price: {property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;