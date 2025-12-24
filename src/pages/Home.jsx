import { useEffect } from "react";
import "./Home.css";
import profile from "../assets/profile.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "Abdullah Naeem | Home";
  }, []);

  return (
    <main className="container">
      <section className="home-card">

        <div className="home-top">
          <div className="home-text">
            <h1>Hi There! 👋</h1>
            <h2>I'M <span>ABDULLAH NAEEM</span></h2>
            <p className="subtitle">Data Scientist | Machine Learning Engineer</p>
          </div>

          <img src={profile} alt="Profile" className="home-img" />
        </div>

        <div className="home-intro">
          <h3>Know Who I'M</h3>

          <p>
            I’m a Data Scientist and Machine Learning Engineer who thrives on turning raw data
            into actionable insights and intelligent systems. Over time, I’ve refined my ability
            to bridge the gap between complex datasets and real-world solutions, focusing on
            building models that are both accurate and scalable.
          </p>

          <p>
            I’m proficient in <strong>Python, SQL, R, Pandas/NumPy, and React.js</strong> — and I 
            enjoy integrating powerful back-end models with intuitive interfaces to ensure complex 
            data is both accessible and actionable.
          </p>

          <p>
            My key areas of interest include <strong>Predictive Modeling, Artificial Intelligence</strong>,
            and exploring the intersection of <strong>Machine Learning and Data Visualization </strong>
            to tell a compelling story with data.
          </p>

          <p>
            Whenever possible, I love building projects using <strong>Python</strong> paired with core
            libraries like <strong>NumPy, Pandas, and Matplotlib</strong> for deep data exploration
            and analysis.
          </p>
        </div>

        <div className="home-social">
          <h4>FIND ME ON</h4>
          <p>Feel free to connect with me</p>

          <div className="social-icons">
            <a href="https://github.com/anganger" target="_blank" rel="noreferrer" className="icon github">GITHUB</a>
            <a href="https://www.linkedin.com/in/abdullahnaeem2002/" target="_blank" rel="noreferrer" className="icon linkedin">LINKEDIN</a>
            <a href="mailto:abdullahnaeem2002a@gamil.com" className="icon email">EMAIL</a>
          </div>
        </div>

      </section>
    </main>
  );
}
