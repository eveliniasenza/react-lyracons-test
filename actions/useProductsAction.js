import axios from "axios";
import {useState, useEffect} from "react";
import {URL_PRODUCT} from "../config/constants";

export const useProductsActions = (type) => {
  const perPage = 6;
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(null)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    axios.get(URL_PRODUCT).then(response => {
      setProducts(response.data[type])
      setTotal(response.data[type].length)
    })
  }, [])

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const productsToShow = products.slice(start, end)
  const totalPages = Math.ceil(total / perPage)

  const toggleCart = (product) => {
    const currentCart = localStorage.getItem('cart');

    if (!!currentCart) {
      // Si hay items en el carrito, debemos verificar
      // Si debemos agregar o borrar
      const items = JSON.parse(currentCart) // pasamos a objetos
      const isFind = items.some(item => item.sku === product.sku) // verificamos si el producto
      // que intentamos agregar, ya fue agreagado
      // Si ya esta agregado, lo borramos
      // Sino, lo agregamos

      if (isFind) {
        const newItems = items.filter(item => item.sku !== product.sku)
        setCartItems(newItems)
      } else {
        setCartItems([...items, ...[product]])
      }
    } else {
      // Siempre se agregar porque todavia no hay carrito
      setCartItems([product])
    }
  }

  useEffect(() => {
    const localStorageCart = localStorage.getItem('cart')

    if (localStorageCart) {
      setCartItems(JSON.parse(localStorageCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  return {
    productsToShow,
    totalPages,
    setPage,
    page,
    toggleCart,
    cartItems: cartItems,
  }
}
