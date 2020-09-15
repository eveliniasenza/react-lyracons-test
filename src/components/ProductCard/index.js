import React from 'react';
import './ProductCard.css';

export const ProductCard = ({product, toggleCart, isAdded, hideAddToCart = false}) => {
  return (
    <div className="card product-card">
      <div>{ product.name }</div>
      <div>Sku: { product.sku }</div>
      <div>Price: { product.price }</div>
      <div>Description: { product.description }</div>
      {
        !hideAddToCart && (
          <button onClick={() => toggleCart(product)} className="btn btn-2">
            { isAdded ? 'Remove from cart' : 'Add to Cart' }
          </button>
        )
      }
    </div>
  )
}
