import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './features/RequireAuth'
import Layout from './features/Layout'
import LoginPage from './pages/Login'
import MainPage from './pages/Main'
import PreviewPost from './pages/PreviewPost'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFoundPage'

function App() {
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
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
