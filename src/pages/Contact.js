import React from "react";
import "./Contact.css";   // ⚠️ MUST

function Contact() {
    return (
        <div className="contact-box">

            <div className="contact-item">
                📧<b> Email </b>
                <p>ananthiduraisamy2005@gmail.com</p>
            </div>

            <div className="contact-item">
                🔗<b> Linkedin</b>
                <p>linkedin.com/in/ananthi-d-a22996354</p>
                <p></p>
            </div>

            <div className="contact-item">
                💻<b>GitHub</b>
                <p>github.com/Ananthi-D</p>

            </div>

           <div className="contact-item">
  <a
    href="https://drive.google.com/file/d/1zimSnTuSMtdTyGvakFWmLDgH0caKkg44/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "white" }}
  >
    📄<b> Resume</b>
    <p>View Resume</p>
  </a>
</div>

        </div>
    );
}

export default Contact;