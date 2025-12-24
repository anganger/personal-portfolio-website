import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = "Abdullah — Projects";
    // simulate loading from data (or api)
    setProjects(projectsData);
  }, []);

  return (
    <main className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </main>
  );
}
