import React, {useState} from 'react';
import {Row, Col} from "react-bootstrap";
import {useRecoilState} from "recoil/dist";
import {useProductsActions} from "../../actions/useProductsAction";
import {productState} from "../../atoms/productAtom";
import {Pagination} from "../components/Layouts/Pagination";
import {ProductCard} from "../components/ProductCard";
import {SmallCard} from "../components/SmallCard";


export const MovieContainer = () => {
  const {
    productsToShow,
    totalPages,
    setPage,
    page,
    toggleCart,
    cartItems
  } = useProductsActions('movies')
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
            { productsToShow.map(movie => (
              <Col xs={4}>
                <SmallCard
                  product={movie}
                  onClick={() => {
                    setProduct(movie)
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
