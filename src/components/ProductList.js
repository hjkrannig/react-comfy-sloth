import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import Error from './Error'

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext()
  const products = filtered_products
  if (products.length < 1) {
    return <Error title='no products matched'
      text='please specify your search' url='/products' />
  }

  return <>
    {grid_view ?
      <GridView products={products} />
      :
      <ListView products={products} />
    }
  </>

}

export default ProductList
