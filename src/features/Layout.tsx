import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import { useRefreshTokenMutation } from './auth/authApiSlice'
import { setCredentials } from './auth/authSlice'
import Loading from './Loading'
import { useGetUserByIdMutation } from './users/usersApiSlice'

const Layout = () => {
  const user = useAppSelector(state => state.auth.user)
  const userId = localStorage.getItem('userId')
  const dispatch = useDispatch()

  const [refreshToken] = useRefreshTokenMutation()
  const [getUserById] = useGetUserByIdMutation()

  useEffect(() => {
    if (userId && !user) {
      refreshToken({})
        .unwrap()
        .then(res => {
          getUserById(userId)
            .unwrap()
            .then(user => {
              dispatch(setCredentials({ user, ...res }))
            })
            .catch(err => {
              localStorage.removeItem('userId')
            })
        })
        .catch(err => {
          localStorage.removeItem('userId')
        })
    }
  }, [userId])

  return !userId || user ? <Outlet /> : <Loading />
}

export default Layout
