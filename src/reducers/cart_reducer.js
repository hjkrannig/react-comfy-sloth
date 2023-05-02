import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions"
const cart_reducer = (state, action) => {
  // ADD_TO_CART
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload
    const tmpItem = state.cart.find((item) => item.id === id + color)
    if (tmpItem) {
      const tmpCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            // the stock-value of the product must stay for all colors equal
            console.log(`... color ${color} is out of stock`)
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tmpCart }
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        price: product.price,
        image: product.images[0].url,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  // REMOVE_CART_ITEM
  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: newCart }
  }
  // CLEAR_CART
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  // TOGGLE_CART_ITEM
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        let newAmount = cartItem.amount + value
        if (newAmount < 1) {
          newAmount = 1
        }
        if (newAmount > cartItem.max) {
          newAmount = cartItem.max
        }
        return { ...cartItem, amount: newAmount }
      } else {
        return cartItem
      }
    })
    return { ...state, cart: newCart }
  }

  //COUNT_CART_TOTALS
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item //cartItem
        total.total_items += amount
        total.total_amount += price * amount
        return total
      },
      { total_items: 0, total_amount: 0 }
    )
    return { ...state, total_amount, total_items }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
