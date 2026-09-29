import React from "react";
import ecommerceImg from "../assets/ecommerce.png";
import socialImg from "../assets/social.png";

function Projects() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>💼 My Projects</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {/* Project 1 */}
        <div
          style={{
            width: "300px",
            background: "#1e293b",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={ecommerceImg}
            alt="Ecommerce"
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />

          <div style={{ padding: "15px" }}>
            <h3>🛒 E-commerce Website</h3>
            <p>Django + React</p>
            <p>Login, Cart, Order, Payment</p>

            <a
              href="https://github.com/Ananthi-D/Major-Project-1.git"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          style={{
            width: "300px",
            background: "#1e293b",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={socialImg}
            alt="Social"
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />

          <div style={{ padding: "15px" }}>
            <h3>📱 Social Media App</h3>
            <p>MERN Stack</p>
            <p>Posts, Comments, Chat, Follow</p>

            <a
              href="https://github.com/Ananthi-D/Major-Project-2.git"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;