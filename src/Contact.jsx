import React from "react";

function Contact() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.text}>
          If you'd like to connect, collaborate, or provide feedback, feel free to
          reach out through any of the links below:
        </p>

        <ul style={styles.list}>
          <li>
            📧 Email:{" "}
            <a href="mailto:gilyu619@gmail.com" style={styles.link}>
              gilyu619@gmail.com
            </a>
          </li>
          <li>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/hinds1ght"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              github.com/hinds1ght
            </a>
          </li>
          <li>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/mark-gil-yu-274721273"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              linkedin.com/in/mark-gil-yu-274721273
            </a>
          </li>
          <li>
            📄 Resume:{" "}
            <a
              href="https://drive.google.com/file/d/16OGpvshe8f78p2RkUFfb3lOskHuqj6zC/view"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              Download PDF
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

// Inline styles
const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f6fa",
  },
  container: {
    padding: "2rem",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "1rem",
    textAlign: "center",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    lineHeight: "2",
    fontSize: "1rem",
    color: "#444",
  },
  link: {
    color: "#4a90e2",
    textDecoration: "none",
  },
};
