import React from 'react'
import { Navigate } from 'react-router-dom'
import { AccountState } from '../Store/Account/types'
import { useSelector } from 'react-redux'
import { AppState } from '../Store'
import Login from '../pages/Account/Login'

const AccountRoute = ({ children }: { children: JSX.Element }) => {
  // lay account bang useSelector
  const account : AccountState = useSelector((state: AppState) => state.account)
  const authed = account.token // isauth() returns true or false based on localStorage
  return authed ? (<Navigate to="/admin" />) : (<Navigate to="/login" />);
}

export default AccountRoute