import { useAuth } from './AuthContext'

export function useFetchWithAuth() {
  const { token, setToken, logout } = useAuth()

  const fetchWithAuth = async (url, options = {}) => {
    let res = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    })

    // Handle expired token
    if (res.status === 401) {
      const refreshRes = await fetch('https://mini-blog-posts-api.onrender.com/api/refresh', {
        credentials: 'include',
      })

      if (refreshRes.ok) {
        const data = await refreshRes.json()
        setToken(data.accessToken)

        // Retry original request with new token
        res = await fetch(url, {
          ...options,
          headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${data.accessToken}`,
          },
        })
      } else {
        logout()
        throw new Error('Session expired. Please log in again.')
      }
    }

    return res
  }

  return fetchWithAuth
}
