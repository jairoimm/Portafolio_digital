import React, { useEffect, useRef } from 'react';

const LINES = [
  { pre: '$ ', text: 'whoami', cls: '' },
  { pre: '> ', text: 'Jairo Muñoz — Estudiante Ing. Informática, Santiago, Chile', cls: 'amber' },
  { pre: '$ ', text: 'cat especialidad.txt', cls: '' },
  { pre: '> ', text: 'Python · Django · Django REST Framework · React · PostgreSQL · JS', cls: 'teal' },
  { pre: '$ ', text: 'echo $STATUS', cls: '' },
  { pre: '> ', text: 'Disponible para práctica profesional y empleo', cls: 'amber' },
];

export default function Hero() {
  const termBodyRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return; // evita doble ejecución en StrictMode/dev
    hasRun.current = true;

    const termBody = termBodyRef.current;
    let li = 0;

    function typeLine() {
      if (li >= LINES.length) {
        const c = document.createElement('span');
        c.className = 'caret';
        termBody.appendChild(c);
        return;
      }
      const { pre, text, cls } = LINES[li];
      const row = document.createElement('div');
      const preSpan = document.createElement('span');
      preSpan.className = 'muted';
      preSpan.textContent = pre;
      const textSpan = document.createElement('span');
      if (cls) textSpan.className = cls;
      row.appendChild(preSpan);
      row.appendChild(textSpan);
      termBody.appendChild(row);

      let i = 0;
      const speed = pre === '$ ' ? 45 : 12;
      const interval = setInterval(() => {
        textSpan.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          li++;
          setTimeout(typeLine, 220);
        }
      }, speed);
    }
    typeLine();
  }, []);

  return (
    <section className="hero">
      <div className="terminal">
        <div className="term-head">
          <span className="t-r"></span><span className="t-y"></span><span className="t-g"></span>
          <div className="term-title">whoami.sh</div>
        </div>
        <div className="term-body" ref={termBodyRef}></div>
      </div>

      <h1 className="hero-title">
        Construyo software que resuelven problemas reales de negocios.
      </h1>
      <p className="hero-sub">
        Estudiante de segundo año de Ingeniería en Informática y desarrollador
        full-stack en Santiago, Chile. Trabajo cómodo en todo el flujo de un proyecto
        modelado de datos, SQL y NoSQL, APIs REST con Django/DRF, interfaces con React,
        integración de pagos, pruebas estaticas con Postman y testing automatizado, 
        organizamos nuestros proyectos y equipo con Trello y Jira.
      </p>
      <p className="hero-sub">
        Empecé por mi cuenta con HTML, CSS y JavaScript, armando páginas simples para
        entender cómo funcionaba realmente la web. De ahí pasé a un bootcamp full-stack
        en Python y Django, donde di el salto a bases de datos relacionales y APIs REST.
        Modelar entidades con relaciones más complejas, escribir migraciones,
        manejar transacciones atómicas y resolver condiciones de carrera en operaciones
        concurrentes.
      </p>
      <p className="hero-sub" style={{ marginTop: 14 }}>
        Hoy, en la practica diaria, me muevo entre el backend y el frontend,
        integro servicios externos como pasarelas de pago, y cubro la lógica
        crítica de negocios con tests automatizados — incluyendo encontrar y corregir
        vulnerabilidades de seguridad antes de que lleguen a producción.
        Cada proyecto nuevo lo uso para aprender algo que en el anterior no sabía hacer bien.
        Cuento con sólida experiencia en control de versiones utilizando Git y GitHub. 
        Domino el flujo de trabajo de ramificación para el desarrollo aislado de funciones, 
        gestión de errores y colaboración limpia en equipo y resolución de conflictos.
      </p>
      <div className="hero-cta">
        <a href="#proyectos" className="btn btn-primary">Ver proyectos →</a>
        <a href="#contacto" className="btn btn-ghost">Conversemos</a>
      </div>

      <div className="stats reveal">
        <div className="stat"><b>04</b><span>Proyectos completados</span></div>
        <div className="stat"><b>2°</b><span>Año Ing. Informática</span></div>
        <div className="stat"><b>CL</b><span>Santiago, Chile</span></div>
        <div className="stat"><b>100%</b><span>Código propio</span></div>
      </div>
    </section>
  );
}
