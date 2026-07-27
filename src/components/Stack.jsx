import React, { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';

const CATEGORIES = [
  {
    tag: 'FRONTEND',
    icon: '🖥️',
    title: 'Interfaz',
    skills: [
      { name: 'HTML/CSS', value: 90, amber: false },
      { name: 'JavaScript', value: 78, amber: false },
      { name: 'React', value: 72, amber: false },
      { name: 'Angular', value: 27, amber: false },
      { name: 'Next.js', value: 22, amber: false },
      { name: 'Bootstrap', value: 85, amber: false },
      
    ],
  },
  {
    tag: 'BACKEND',
    icon: '⚙️',
    title: 'Servidor',
    skills: [
      { name: 'Python', value: 82, amber: true },
      { name: 'Django', value: 78, amber: true },
      { name: 'Django REST', value: 72, amber: true },
      { name: 'Node.js', value: 15, amber: true },
      { name: 'Spring Boot', value: 17, amber: true },
      { name: 'FastAPI', value: 44, amber: true },
      { name: '.NET', value: 14, amber: true },
    ],
  },
  {
    tag: 'DATOS',
    icon: '🗄️',
    title: 'Bases de datos Relacionales y NoSQL',
    skills: [
      { name: 'SQL', value: 75, amber: false },
      { name: 'PostgreSQL', value: 70, amber: false },
      { name: 'SQLite', value: 80, amber: false },
      { name: 'Oracle', value: 77, amber: false },
      { name: 'MongoDB', value: 40, amber: false },
      { name: 'Redis', value: 15, amber: false },
      { name: 'Neo4j', value: 13, amber: false },
      { name: 'Apache Cassandra', value: 7, amber: false },
    ],
  },
  {
    tag: 'HERRAMIENTAS',
    icon: '🛠️',
    title: 'Flujo de trabajo',
    skills: [
      { name: 'Git/GitHub', value: 80, amber: true },
      { name: 'Postman', value: 65, amber: true },
      { name: 'Trello', value: 60, amber: true },
      { name: 'Jira', value: 55, amber: true },
      { name: 'Studio3T', value: 65, amber: true },
      { name: 'Oracle Cloud', value: 75, amber: true },
      { name: 'PSeint', value: 75, amber: true },
      { name: 'Draw.io', value: 65, amber: true },
    ],
  },
];

function SkillRow({ name, value, amber }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bar.style.setProperty('--w-ratio', value / 100);
            bar.classList.add('filled');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="skill-row">
      <span className="skill-name">{name}</span>
      <div className="meter">
        <i ref={barRef} className={amber ? 'amber-fill' : ''}></i>
      </div>
    </div>
  );
}

export default function Stack() {
  const containerRef = useReveal();

  return (
    <section id="stack" ref={containerRef}>
      <div className="eyebrow">Panel de control</div>
      <h2 className="section-title reveal">Stack técnico</h2>
      <p className="section-desc reveal">
        Las herramientas con las que diseño, construyo y pruebo sistemas de principio a fin.
      </p>

      <div className="stack-grid">
        {CATEGORIES.map((cat) => (
          <div className="stack-card reveal" data-tag={cat.tag} key={cat.tag}>
            <h3>{cat.icon} {cat.title}</h3>
            {cat.skills.map((s) => (
              <SkillRow key={s.name} name={s.name} value={s.value} amber={s.amber} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
