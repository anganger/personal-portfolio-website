import { useEffect, useRef } from "react";
import "./SkillBar.css";

export default function SkillBar({ skill }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // animate fill with small timeout for transition
      setTimeout(() => {
        ref.current.style.width = `${skill.level}%`;
      }, 80);
    }
  }, [skill.level]);

  return (
    <div className="skill-row">
      <div className="skill-name">{skill.name}</div>
      <div className="skill-track">
        <div ref={ref} className="skill-fill" style={{ width: 0 }} />
      </div>
      <div className="skill-percent">{skill.level}%</div>
    </div>
  );
}
