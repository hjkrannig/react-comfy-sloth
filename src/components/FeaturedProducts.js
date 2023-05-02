import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: products } = useProductsContext()
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error text='please try again later. the url seems to not answering ' />
  }
  return <Wrapper className='section'>
    <div className='title'>
      <h2>featured products</h2>
      <div className='underline'></div>
      <div className='section-center featured'>
        {
          products.slice(2, 5).map((product) => {

            return <Product product={product} key={product.id} />
          })
        }
      </div>
    </div>
    <Link to='/products' className='btn'>all products</Link>

  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
