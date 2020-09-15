import React, {useState, useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import {ProductCard} from "../components/ProductCard";

export const CartContainer = () => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const localStorageCart = localStorage.getItem('cart')

    if (localStorageCart) {
      setCartItems(JSON.parse(localStorageCart))
    }
  }, [])

  useEffect(() => {
    const finalTotal = cartItems.reduce((a, b) => {
      return a + parseFloat(b.price.slice(1))
    }, 0)

    setTotal(finalTotal.toFixed(2));
  }, [cartItems])


  return (
    <>
      <Row>
        { cartItems.map(movie => (
          <Col xs={4}>
            <ProductCard
              product={movie}
              hideAddToCart={true}
            />
          </Col>
        )) }

      </Row>
      <Row>
        <Col xs={12}>Total: {total}</Col>
      </Row>
    </>
  )
}
