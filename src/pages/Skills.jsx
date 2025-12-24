import { useEffect, useState } from "react";
import SkillBar from "../components/SkillBar";
import skillsData from "../data/skills";
import "./Skills.css";

import cert5 from "../assets/certificate5.jpg";
import cert3 from "../assets/certificate3.jpg";
import cert4 from "../assets/certificate4.jpg";
import cert1 from "../assets/certificate1.jpg";
import cert2 from "../assets/certificate2.jpg";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    document.title = "Abdullah — Skills";
    setSkills(skillsData);
  }, []);

  return (
    <main className="container">

      {/* ===== SKILLS ===== */}
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((s) => (
          <SkillBar key={s.id} skill={s} />
        ))}
      </div>

      {/* ===== INTERESTS ===== */}
      <section className="interests-card">
        <h3>Interests</h3>
        <div className="interest-tags">
          <span>Paddle Tennis</span>
          <span>Crypto</span>
          <span>Travelling</span>
          <span>Machine Learning</span>
          <span>Data Visualization</span>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <h2 className="section-title" style={{ marginTop: 40 }}>
        Certifications
      </h2>

      <section className="cert-section">

        {/* ===== SPECIALIZATION ===== */}
        <div className="cert-card">
          <div className="cert-text">
            <h2>Machine Learning Specialization</h2>

            <p>
              Successfully completed the <strong>Machine Learning Specialization</strong>,
              an online non-credit program authorized by <strong>DeepLearning.AI</strong> and
              <strong> Stanford University</strong>, offered through Coursera.
            </p>

            <p>
              This specialization consists of three courses:
              <strong>
                {" "}Supervised Machine Learning, Advanced Learning Algorithms,
                and Unsupervised Learning, Recommenders, and Reinforcement Learning
              </strong>.
            </p>

            <p className="cert-meta">
              Instructor: Andrew Ng
            </p>

            <a
              href="https://coursera.org/verify/specialization/F3GMJ6WBG3EA"
              target="_blank"
              rel="noreferrer"
              className="verify-link"
            >
              Verify Specialization →
            </a>
          </div>

          <img src={cert5} alt="Machine Learning Specialization Certificate" />
        </div>

        {/* ===== SUPERVISED ML ===== */}
        <div className="cert-card">
          <div className="cert-text">
            <h2>Supervised Machine Learning: Regression & Classification</h2>

            <p>
              Successfully completed the <strong>Supervised Machine Learning</strong> course
              authorized by <strong>DeepLearning.AI</strong> and
              <strong> Stanford University</strong>.
            </p>

            <p>
              Focused on regression, classification, and model evaluation techniques.
            </p>

            <p className="cert-meta">
              Instructor: Andrew Ng
            </p>

            <a
              href="https://coursera.org/verify/ZSIIEFITV8E0"
              target="_blank"
              rel="noreferrer"
              className="verify-link"
            >
              Verify Certificate →
            </a>
          </div>

          <img src={cert3} alt="Supervised Machine Learning Certificate" />
        </div>

        {/* ===== CERTIFICATE 4 (NEW) ===== */}
        <div className="cert-card">
          <div className="cert-text">
            <h2>Unsupervised Learning, Recommenders & Reinforcement Learning</h2>

            <p>
              Successfully completed the <strong>Unsupervised Learning, Recommenders,
              and Reinforcement Learning</strong> course, authorized by
              <strong> DeepLearning.AI</strong> and <strong>Stanford University</strong>.
            </p>

            <p>
              This course covered clustering, anomaly detection, recommender systems,
              and reinforcement learning techniques for sequential decision making.
            </p>

            <p className="cert-meta">
              Instructor: Andrew Ng
            </p>

            <a
              href="https://coursera.org/verify/I8RJCZS17QJV"
              target="_blank"
              rel="noreferrer"
              className="verify-link"
            >
              Verify Certificate →
            </a>
          </div>

          <img src={cert4} alt="Unsupervised Learning Certificate" />
        </div>

        {/* ===== ADVANCED LEARNING ===== */}
        <div className="cert-card">
          <div className="cert-text">
            <h2>Advanced Learning Algorithms</h2>

            <p>
              Successfully completed the <strong>Advanced Learning Algorithms</strong> course
              authorized by <strong>DeepLearning.AI</strong> and
              <strong> Stanford University</strong>.
            </p>

            <p>
              Covered neural networks, optimization techniques, and performance
              improvement strategies.
            </p>

            <p className="cert-meta">
              Instructor: Andrew Ng
            </p>

            <a
              href="https://coursera.org/verify/R84MYQ8SVT5K"
              target="_blank"
              rel="noreferrer"
              className="verify-link"
            >
              Verify Certificate →
            </a>
          </div>

          <img src={cert1} alt="Advanced Learning Algorithms Certificate" />
        </div>

        {/* ===== DATA SCIENCE ===== */}
        <div className="cert-card">
          <div className="cert-text">
            <h2>Introduction to Data Science</h2>

            <p>
              Successfully completed the <strong>Introduction to Data Science</strong> course
              offered by <strong>Cisco Networking Academy</strong>.
            </p>

            <p className="cert-meta">
              Issued: July 11, 2025
            </p>

            <a
              href="https://www.credly.com/badges/2863276b-4322-4534-92e4-d0ce2cbb75d8"
              target="_blank"
              rel="noreferrer"
              className="verify-link"
            >
              Verify Certificate →
            </a>
          </div>

          <img src={cert2} alt="Introduction to Data Science Certificate" />
        </div>

      </section>
    </main>
  );
}
