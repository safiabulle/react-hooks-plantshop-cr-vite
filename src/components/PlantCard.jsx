import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  // Local state for stock status (non-persisting as per instructions)
  const [isInStock, setIsInStock] = useState(true);

  function handleToggle() {
    setIsInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggle}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;