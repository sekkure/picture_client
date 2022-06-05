import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectCurrentUser,
  selectCurrentToken,
} from '../../features/auth/authSlice'
const MainPage = () => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)

  const welcome = user ? `Welcome ${user.name}` : 'Welcome!'
  const tokenAbbr = `${token?.slice(0, 9)}...`

  return (
    <div>
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
    </div>
  )
}

export default MainPage
