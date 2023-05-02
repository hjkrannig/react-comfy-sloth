import React from "react"
import styled from "styled-components"
import { PageHero, StripeCheckout } from "../components"
import { Link } from "react-router-dom"
// extra imports
import { useCartContext } from "../context/cart_context"
// extra kg-imports
import { useUserContext } from "../context/user_context"
import { Error } from "../components"

const CheckoutPage = () => {
  const { cart } = useCartContext()
  // User-Access-Restriction eventually to be set up as component with   permission-check. Its an alternative approach to PrivateRoute
  const { appUser } = useUserContext()
  if (!appUser) {
    return (
      <>
        <Error
          title="not authenticated"
          text="You have to login to access this page..."
        />
      </>
    )
  }
  // End User-Access-Restriction
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        {cart.length < 1 ?
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className='btn'>
              fill it
            </Link>
          </div>
          :
          <StripeCheckout />

        }
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
.empty {
  text-align: center;
  a {
    margin-top: 1rem
  };
}
`
export default CheckoutPage
