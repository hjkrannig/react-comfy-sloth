import React, { useEffect, useContext, useReducer } from "react"
import reducer from "../reducers/cart_reducer"
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions"

// getLocalStorage
const getLocalStorage = () => {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(localStorage.getItem("cart")) : []
}
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

// Create Context
const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // addToCart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  // toggleAmout
  const toggleAmount = (id, value) => {
    console.log(id, value)
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }
  // removeItem
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }
  // clearCart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  // setLocalStorage
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
