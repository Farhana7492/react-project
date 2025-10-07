import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Dashboard from './components/pages/Dashboard.tsx'
import Products from './components/pages/Products.tsx'
import ManagePosts from './components/pages/posts/ManagePosts.tsx'
import CreatePost from './components/pages/posts/CreatePost.tsx'
import DetailsPost from './components/pages/posts/DetailsPost.tsx'
import EditPost from './components/pages/posts/EditPost .tsx'
import ManageRoles from './components/pages/roles/ManageRoles.tsx'
import CreateRoles from './components/pages/roles/CreateRoles.tsx'
import ManageUsers from './components/pages/users/ManageUsers.tsx'
import CreateUsers from './components/pages/users/CreateUsers.tsx'
import EditRole from './components/pages/roles/EditRole.tsx'

const router = createBrowserRouter([
  {path: '/',element: <Layout />,
    children: [
      {index: true,element: <Dashboard />},
      {path: '/dashboard',element: <Dashboard />},
      {path: '/products',element: <Products />},
      {path: '/users',element: <ManageUsers/>},
      {path: '/create-user',element: <CreateUsers/>},
      {path: '/sales',element: <h1>Sales</h1>},
      {path: '/posts',element: <ManagePosts />},
      {path: '/post/create',element:<CreatePost /> },
      {path: '/post/details/:id',element:<DetailsPost /> },
      {path: '/post/edit/:id',element:<EditPost/> },
      {path: '/roles',element:<ManageRoles/> },
      {path: '/create-role',element:<CreateRoles/> },
      {path: '/edit-role/:id',element:<EditRole/> },
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
