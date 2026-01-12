import { useEffect } from "react";
import "./Resume.css";
import resumePDF from "../assets/resume1.pdf";

export default function Resume() {
  useEffect(() => {
    document.title = "Abdullah — Resume";
  }, []);

  return (
    <main className="container resume-page">
      <h2 className="section-title">Resume</h2>

      <iframe
        src={resumePDF}
        title="Resume"
        className="resume-frame"
      />

      <p style={{ marginTop: 10, color: "var(--muted)" }}>
        If the PDF does not show,{" "}
        <a href={resumePDF} target="_blank" rel="noreferrer">
          Download resume
        </a>
      </p>
    </main>
  );
}