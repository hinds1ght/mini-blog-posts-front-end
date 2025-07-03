import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Login from './Login.jsx'
import Landing from './Landing.jsx'
import Register from './Register.jsx'
import Posts from './Posts.jsx'
import { AuthProvider } from '../utils/authContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },           
      { path: "login", element: <Login /> },           
      { path: "register", element: <Register /> },     
      {
        element: <ProtectedRoute />, 
        children: [
          { path: "posts", element: <Posts /> },
        ],
      },
    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
