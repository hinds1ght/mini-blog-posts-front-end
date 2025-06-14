import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../utils/authContext'

function ProtectedRoute() {
  const { user, loading } = useAuth()

  if (loading) return <div>Checking authentication...</div>

  return user ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoute