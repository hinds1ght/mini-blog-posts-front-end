import { useRef, useState } from 'react'
import { sanitizeInput } from "../utils/sanitizeInput"
import { Navigate } from 'react-router-dom'
import { useAuth } from "../utils/authContext.jsx" 
import { Link } from "react-router-dom"

function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login, user, loading} = useAuth();
    const [error, setError] = useState(null)
    const [Cloading, setLoading] = useState(false)

    if (loading) return <div>Loading...</div>;
    if (user) return <Navigate to="/posts" replace />;
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null)
        setLoading(true)

        const email = sanitizeInput(emailRef.current.value)
        
        try {
          await login(email, passwordRef.current.value)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      } 
    
     return(
      <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>

        <label htmlFor="email" style={styles.label}>Email</label>
        <input type="text" id="email" name="email" ref={emailRef} style={styles.input} />

        <label htmlFor="password" style={styles.label}>Password</label>
        <input type="password" id="password" name="password" ref={passwordRef} style={styles.input} />

        <button type="submit" disabled={Cloading} style={styles.button}>
          {Cloading ? "Logging in..." : "🔑 Login"}
        </button>
        <Link to="/register" style={{marginTop: '5px'}}>Don't have an account? Register here</Link>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
    )
}

export default Login;

// Simple inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    backgroundColor: "#f7f9fc",
  },
  form: {
    background: "#fff",
    marginTop: "5rem",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  },
  label: {
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#444",
  },
  input: {
    padding: "0.5rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  error: {
    marginTop: "1rem",
    color: "red",
    textAlign: "center",
  },
  loading: {
    textAlign: "center",
    paddingTop: "2rem",
    fontSize: "1.2rem",
    color: "#555",
  },
};