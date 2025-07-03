import React from "react";

const About = () => {
  return (
    <section style={{ padding: "40px 20px", minHeight: "100vh", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px", color: "#222" }}>About Me</h2>
      
      <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "16px", color: "#444" }}>
        Hi, I'm a self-taught web developer with a Bachelor of Science degree in Computer Engineering. I specialize in building modern, responsive web applications with a focus on clean code, performance, and usability.
      </p>
      
      <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "16px", color: "#444" }}>
        My primary stack includes <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>Express</strong>. For data management, I work with both <strong>PostgreSQL</strong> and <strong>MongoDB</strong>, depending on the needs of the project.
      </p>
      
      <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "16px", color: "#444" }}>
        I’m also familiar with technical SEO tools like <strong>Ahrefs</strong>, and I understand the importance of building web experiences that are not just functional but discoverable.
      </p>
      
      <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "16px", color: "#444" }}>
        I love tackling full-stack problems—from creating intuitive UI components to designing scalable backend APIs. I'm constantly learning and always up for building meaningful projects that make an impact.
      </p>
    </section>
  );
};

export default About;
