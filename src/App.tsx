import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useRefreshTokenMutation } from './features/auth/authApiSlice'
import { setCredentials } from './features/auth/authSlice'
import { useGetUserByIdMutation } from './features/users/usersApiSlice'
import RequireAuth from './features/RequireAuth'
import Layout from './features/Layout'
import LoginPage from './pages/Login'
import MainPage from './pages/Main'
import PreviewPost from './pages/PreviewPost'

function App() {
  const userId = localStorage.getItem('userId')

  const [refreshToken] = useRefreshTokenMutation()
  const [getUserById] = useGetUserByIdMutation()

  useEffect(() => {
    if (userId) {
      if (window.location.pathname === '/login') return

      refreshToken({})
        .unwrap()
        .then(res => {
          getUserById(userId)
            .unwrap()
            .then(user => {
              setCredentials({ user, ...res })
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Private routes  */}

          <Route element={<RequireAuth />}>
            <Route index element={<MainPage />} />
            <Route path="post/:id" element={<PreviewPost />} />
          </Route>

          {/* Public routes */}

          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
