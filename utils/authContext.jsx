import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const tryRefresh = async () => {
    try {
      const res = await fetch("http://localhost:2025/api/auth/refresh", {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();

        if (data?.accessToken && data?.user) {
          setToken(data.accessToken);
          setUser(data.user);
        }
      }
    } catch (error) {
      console.error("Silent refresh error:", error);
    }
  };

  useEffect(() => {
    tryRefresh().finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await fetch("http://localhost:2025/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Login failed');
    }

    await tryRefresh();
  };

  const logout = async () => {
    await fetch("http://localhost:2025/api/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, token, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
