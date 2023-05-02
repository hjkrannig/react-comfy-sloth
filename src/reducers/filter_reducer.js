import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions"

import { sortCriterials } from "../utils/constants"

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let max_price = action.payload.map((product) => product.price)
    max_price = Math.max(...max_price)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price, price: max_price },
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tmpProducts = filtered_products

    if (sort === sortCriterials.sortNameAZ) {
      tmpProducts = tmpProducts.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sort === sortCriterials.sortNameZA) {
      tmpProducts = tmpProducts.sort((a, b) => b.name.localeCompare(a.name))
    }

    if (sort === sortCriterials.sortPriceHigh) {
      // sort the long way for example
      tmpProducts = tmpProducts.sort((a, b) => {
        if (a.price < b.price) {
          return 1
        }
        if (a.price > b.price) {
          return -1
        }
        return 0
      })
    }

    if (sort === sortCriterials.sortPriceLow) {
      tmpProducts = tmpProducts.sort((a, b) => a.price - b.price)
    }

    return { ...state, filtered_products: tmpProducts }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    }
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { search_text, company, color, category, price, shipping } =
      state.filters
    let tmpProducts = [...all_products]
    // filtering text
    if (search_text) {
      tmpProducts = tmpProducts.filter((p) => {
        return p.name.toLowerCase().startsWith(search_text.toLowerCase())
      })
    }

    // filtering category
    if (category !== "all") {
      tmpProducts = tmpProducts.filter((p) => {
        return p.category === category
      })
    }
    // filtering company
    if (company !== "all") {
      tmpProducts = tmpProducts.filter((p) => {
        return p.company === company
      })
    }
    // filtering color
    if (color !== "all") {
      tmpProducts = tmpProducts.filter((p) => {
        return p.colors.find((c) => c === color)
      })
    }
    // filtering shipping
    if (shipping) {
      tmpProducts = tmpProducts.filter((p) => {
        return p.shipping
      })
    }
    // filtering price
    tmpProducts = tmpProducts.filter((p) => p.price <= price)

    // console.log(tmpProducts)
    return { ...state, filtered_products: tmpProducts }
  }

  if (action.type === CLEAR_FILTERS) {
    const maxPrice = state.filters.max_price
    return {
      ...state,
      filters: { ...action.payload, max_price: maxPrice, price: maxPrice },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
