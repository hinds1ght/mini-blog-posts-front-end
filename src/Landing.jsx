import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>My Mini Blog Post App — A Simple Fullstack Auth Project</h1>

        <p style={styles.text}>
          Welcome to <strong>My Mini Blog Post App</strong>, a lightweight fullstack application that demonstrates secure authentication, protected routes, and modern React practices.
        </p>

        <p style={styles.text}>
          Built with <strong>React 19</strong>, <strong>React Router v7</strong>, and powered by <strong>Vite</strong> for fast development. This app uses custom authentication with:
        </p>

        <ul style={styles.list}>
          <li> Token-based login with refresh tokens</li>
          <li> Protected routes using context and router guards</li>
          <li> Simple backend (e.g. Express + Prisma/PostgreSQL)</li>
          <li> Form handling with inline styling for quick UI setup</li>
        </ul>

        <p style={styles.text}>
          You can either:
        </p>

        <div style={styles.buttons}>
          <Link to="/login" style={styles.link}>🔑 Login</Link>
          <Link to="/register" style={styles.link}>📝 Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;

// Inline styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f6fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  heading: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1rem",
    lineHeight: "1.6",
  },
  list: {
    paddingLeft: "1.5rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  link: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#4a90e2",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
