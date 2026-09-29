import React from "react";
import cert2 from "../assets/certificate2.jpg";
import cert1 from "../assets/certificate1.jpg";
import cert3 from "../assets/certificate3.jpg";
import cert4 from "../assets/certificate4.jpg";
import cert5 from "../assets/certificate5.jpg";
import cert6 from "../assets/certificate6.jpg";
import cert7 from "../assets/certificate7.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Development Program",
      desc: "Built scalable web applications using MERN stack technologies.",
      tag: "Guvi",
      image: cert1,
    },
    {
      title: "Edunet AI Program",
      desc: "AI project-baced learning exprience.",
      tag: "Edunet",
      image: cert2,
    },
    {
      title: "Microsoft Azure Fundamentals",
      desc: "Cloud computing and Azure services basics.",
      tag: "Azure",
      image: cert3,
    },
    {
      title: "Power BI for Business Applications",
      desc: "Data dashboards and visualization.",
      tag: "Microsoft",
      image: cert4,
    },
    {
      title: "Generative AI with IBM",
      desc: "Gained hands-on experience in Generative AI tools and prompt engineering using IBM Cloud.",
      tag: "NM",
      image: cert5,
    },
     {
      title: "Python Full Stack Internship",
      desc: "Frontend + backend full stack experience.",
      tag: "Pantech Internship",
      image: cert6,
    },
     {
      title: "Employability Skills Training",
      desc: "Communication, teamwork, interview skills.",
      tag: "Skill Development",
      image: cert7,
    },
  ];

  return (
    <div style={{ padding: "40px", color: "white", textAlign: "center" }}>
      
      <h1 style={{ marginBottom: "30px" }}>Certifications 🏆</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              background: "#1e293b",
            }}
          >
            {/* Image */}
            <img
              src={cert.image}
              alt="certificate"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            {/* Content */}
            <div style={{ padding: "15px", textAlign: "left" }}>
              <h5>{cert.title}</h5>
              <p style={{ color: "#aaa" }}>{cert.desc}</p>

              {/* Tag */}
              <span
                style={{
                  background: "#334155",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {cert.tag}
              </span>

              <br />

              {/* Button */}
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: "#6366f1",
                  color: "white",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;