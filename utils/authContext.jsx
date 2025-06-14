import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tryRefresh = async () => {
      try {
        const res = await fetch("http://localhost:2025/api/auth/refresh", {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setToken(data.accessToken);
          setUser(data.user);
        }
      } catch (error) {
        console.error("token refresh failed");
      } finally {
        setLoading(false);
      }
    };

    tryRefresh();
  }, []);

  const login = async (email, password) => {
    const res = await fetch('http://localhost:2025/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) throw new Error('Login failed')

    const data = await res.json()
    setToken(data.accessToken)
    setUser(data.user)
  };

  const logout = async () => {
    await fetch('http://localhost:2025/api/logout', {
      method: 'POST',
      credentials: 'include',
    })
    setUser(null)
    setToken(null)
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, token, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
