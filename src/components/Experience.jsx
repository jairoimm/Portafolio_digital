import React from 'react';
import useReveal from '../hooks/useReveal';

const ITEMS = [
  {
    icon: '🎓',
    title: 'Ingeniería en Informática',
    meta: 'INACAP · 2do año · En curso',
    desc: 'Cursando actualmente las asignaturas de bases de datos no estructuradas, fundamentos de la seguridad informática, sistemas operativos, plan de pruebas de software y innovación y emprendimiento.',
  },
  {
    icon: '💻',
    title: 'Bootcamp Full Stack Python',
    meta: 'Instituto Praxis (dictado) · Talento Digital (certificación) · Mar 2024 – Sep 2024',
    desc: 'Aprendizaje práctico orientado a proyectos reales: HTML5, CSS3, JavaScript, Python, Django, PostgreSQL, Bootstrap y Git, con foco en APIs REST y desarrollo front-end/back-end.',
  },
];

export default function Experience() {
  const containerRef = useReveal();

  return (
    <section id="experiencia" ref={containerRef}>
      <div className="eyebrow">Historial</div>
      <h2 className="section-title reveal">Formación</h2>
      <p className="section-desc reveal">
        Base técnica construida antes y durante el inicio de la carrera.
      </p>

      {ITEMS.map((item) => (
        <div className="timeline-item reveal" key={item.title}>
          <div className="timeline-icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            <div className="meta">{item.meta}</div>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
