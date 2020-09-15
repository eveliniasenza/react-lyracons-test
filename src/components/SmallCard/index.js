import React from 'react';
import './SmallCard.css';

export const SmallCard = ({product, onClick}) => {
  return (
    <div className="card small-card" onClick={onClick}>
      { product.name }
    </div>
  )
}
