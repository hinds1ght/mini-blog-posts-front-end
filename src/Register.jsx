import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:2025/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await res.json();
      setMessage("Registration successful!");
      console.log("New user:", data);
    } catch (err) {
      setMessage(`${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>

        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Registering..." : "Register"}
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

export default Register;


const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f7f9fc",
    },
    form: {
      background: "#fff",
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
    message: {
      marginTop: "1rem",
      color: "#e74c3c", // red by default for error
      textAlign: "center",
      fontWeight: "bold",
    },
  };
  
