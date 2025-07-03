import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.paragraph}>
          Hi there! I'm a self-taught web developer with a Bachelor's degree in Computer Engineering. I’m passionate about turning ideas into real-world digital experiences that are clean, fast, and user-friendly.
        </p>

        <p style={styles.paragraph}>
          I work with technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>Express</strong>. I also use <strong>PostgreSQL</strong> and <strong>MongoDB</strong> to handle databases efficiently.
        </p>

        <p style={styles.paragraph}>
          On the SEO side, I'm familiar with tools like <strong>Ahrefs</strong> and always aim to build websites that not only look great but perform well in search rankings.
        </p>

        <p style={styles.paragraph}>
          Whether I’m working on the front-end or the back-end, I enjoy solving problems and building things that people enjoy using. I'm always learning and love collaborating on projects that matter.
        </p>

        <div style={styles.contactLinkWrapper}>
          <Link to="/contact" style={styles.contactLink}>
            Let’s connect 
          </Link>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  container: {
    background: "#fff",
    maxWidth: "800px",
    width: "100%",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#222",
    textAlign: "start",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "16px",
    color: "#444",
  },
  contactLinkWrapper: {
    textAlign: "center",
    marginTop: "30px",
  },
  contactLink: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default About;
