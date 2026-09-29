import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#020617",
      }}
    >
      {/* LEFT SIDE (Your name / logo) */}
      <h2 style={{ color: "white" }}>🌐 Portfolio</h2>

      {/* RIGHT SIDE (Menu) */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          🏠 Home
        </Link>

        <Link to="/skills" style={{ color: "white", textDecoration: "none" }}>
          💻 Skills
        </Link>

        <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>
          💼 Projects
        </Link>

        <Link to="/certificates" style={{ color: "white", textDecoration: "none" }}>
          📜 Certificates
        </Link>


        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          📞 Contact
        </Link>


      </div>
    </div>
  );
}

export default Navbar;