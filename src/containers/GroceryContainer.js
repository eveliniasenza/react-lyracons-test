import React, {useState} from 'react';
import {Row, Col} from "react-bootstrap";
import {useProductsActions} from "../../actions/useProductsAction";
import {Pagination} from "../components/Layouts/Pagination";
import {ProductCard} from "../components/ProductCard";
import {SmallCard} from "../components/SmallCard";


export const GroceryContainer = () => {
  const {
    productsToShow,
    totalPages,
    setPage,
    page,
    toggleCart,
    cartItems
  } = useProductsActions('groceries')
  const [product, setProduct] = useState(null)

  return (
    <>
      <Row>
        <Col md={3}>
          { product && (
            <ProductCard
              product={product}
              toggleCart={toggleCart}
              isAdded={cartItems.some(item => item.sku === product.sku)}
            />
          ) }
          { !product && 'Select a product'
          }
        </Col>
        <Col md={9}>
          <Row>
            { productsToShow.map(grocery => (
              <Col xs={4}>
                <SmallCard
                  product={grocery}
                  onClick={() => {
                    setProduct(grocery)
                  }}
                />
              </Col>
            )) }
          </Row>
          <Row>
            <Col xs={12}>
              <Pagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
