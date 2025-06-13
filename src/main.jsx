import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Login from './Login.jsx'
import Posts from './Posts.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
      children:[
        {index: true, element: <Login />},
        {path:"posts", element: <Posts />}
      ]
  },])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
