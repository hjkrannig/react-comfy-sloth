import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

// late decision! This way, as constants, the url can change and typos will be minimized. By this time its not surely implemented everywhere!
export const routes =
{
  home: '/',
  about: '/about',
  cart: '/cart',
  products: '/products',
  product: '/products/:id',
  checkout: '/checkout',
}

export const links = [
  {
    id: 1,
    text: 'home',
    url: routes.home,
  },
  {
    id: 3,
    text: 'products',
    url: routes.products,
  },
  {
    id: 2,
    text: 'about',
    url: routes.about,
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const sortCriterials = {
  sortPriceHigh: 'priceHigh',
  sortPriceLow: 'priceLow',
  sortNameAZ: 'nameAZ',
  sortNameZA: 'nameZA',
}

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = 'https://course-api.com/react-store-single-product?id='
