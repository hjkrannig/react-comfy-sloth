import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { routes } from '../utils/constants'


const PrivateRoute = ({ children }) => {
  // getting the appUser from useUserContext is to slow, so it will be none and it seems to be checked out...
  const { user } = useAuth0()
  if (!user) {
    return <Navigate to={routes.home} />
  }
  return children
}
export default PrivateRoute
