import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 size={40} color="#e34c26" />,
      title: "HTML",
      desc: "Creating structured and semantic web pages",
    },
    {
      icon: <FaCss3Alt size={40} color="#264de4" />,
      title: "CSS",
      desc: "Designing responsive and modern UI",
    },
    {
      icon: <FaJs size={40} color="#f0db4f" />,
      title: "JavaScript",
      desc: "Building interactive web applications",
    },
    {
      icon: <FaReact size={40} color="#61DBFB" />,
      title: "React",
      desc: "Creating dynamic frontend applications",
    },
    {
      icon: <FaNodeJs size={40} color="#3C873A" />,
      title: "Node.js",
      desc: "Backend development and APIs",
    },
  ];

  return (
    <div style={{ padding: "40px", textAlign: "center", color: "white" }}>
      
      <h5 style={{ letterSpacing: "2px",color: "#7d61d1" }}>MY SKILLS</h5>

      <h1 style={{ fontSize: "40px", marginBottom: "20px",color: "#cbd5f5" }}>
        Technologies & Development Skills
      </h1>

      <p style={{ maxWidth: "600px", margin: "auto", color: "#ccc" }}>
        Passionate about building modern web applications with clean UI and responsive design.
      </p>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              textAlign: "center",
            }}
          >
            {skill.icon}
            <h3>{skill.title}</h3>
            <p style={{ color: "#aaa" }}>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;