import React from 'react'
import { Navigate } from 'react-router-dom'
import { AccountState } from '../Store/Account/types'
import { AppState } from '../Store'
import { useSelector } from 'react-redux'
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const account : AccountState = useSelector((state: AppState) => state.account)
  const authed = account.token

  return authed ? children : <Navigate to="/login" />;
}

export default PrivateRoute
