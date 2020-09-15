import axios from "axios";
import React, {useEffect, useState} from 'react';
import {Row, Col} from "react-bootstrap";
import {URL_PRODUCT} from "../../config/constants";
import {ProductCard} from "../components/ProductCard";


export const PromotionsContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(URL_PRODUCT).then(response => {
      const movies = response.data.movies.filter(product => product.promoted)
      const groceries = response.data.groceries.filter(product => product.promoted)
      setProducts([...movies, ...groceries])
    })
  }, [])

  return (
    <>
      <Row>
        { products.map(product => (
          <Col xs={4}>
            <ProductCard product={product} />
          </Col>
        )) }

      </Row>
    </>
  )
}
