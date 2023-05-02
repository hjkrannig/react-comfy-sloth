import React from "react"
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom"
import { Navbar, Sidebar, Footer } from "./components"
import { About, AuthWrapper, Cart, Checkout, Error, Home } from "./pages"
import { PrivateRoute, Products, SingleProduct } from "./pages"
import { routes } from "./utils/constants"
const { home, about, cart, products, product, checkout } = routes

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={about} element={<About />} />
          <Route path={cart} element={<Cart />} />
          <Route path={products} element={<Products />} />
          <Route path={product} element={<SingleProduct />} />
          <Route path={checkout} element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />
          <Route path='*' element={<Error />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
