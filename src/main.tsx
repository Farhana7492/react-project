import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Navbar from './components/layout/Navbar.tsx'
import Dashboard from './components/pages/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <h1>Products</h1>,
      }
    ],
  },
  {
    path: '/login',
    element: <h1>Login</h1>,
  },
  {
    path: '/nav',
    element: <Navbar />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
