import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Dashboard from './components/pages/Dashboard.tsx'
import Products from './components/pages/Products.tsx'
import ManagePosts from './components/pages/posts/ManagePosts.tsx'
import CreatePost from './components/pages/posts/CreatePost.tsx'

const router = createBrowserRouter([
  {path: '/',element: <Layout />,
    children: [
      {index: true,element: <Dashboard />},
      {path: '/dashboard',element: <Dashboard />},
      {path: '/products',element: <Products />},
      {path: '/roles',element: <h1>Roles</h1>},
      {path: '/users',element: <h1>Users</h1>},
      {path: '/sales',element: <h1>Sales</h1>},
      {path: '/posts',element: <ManagePosts />},
      {path: '/post/create',element:<CreatePost /> },
    ],
  },
  {path: '/pos',element: <h1>POS</h1>},
  {path: '/login',element: <h1>Login</h1>},
  {path: '*',element: <h1 >404 Not Found</h1>},
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
