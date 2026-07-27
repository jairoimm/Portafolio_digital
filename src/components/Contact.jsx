import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const containerRef = useReveal();

  return (
    <section id="contacto" ref={containerRef}>
      <div className="contact-panel reveal">
        <div className="contact-prompt">$ conectar --con="tu-equipo"</div>
        <h2 className="section-title" style={{ marginBottom: 14 }}>
          ¿Buscas un profesional con ganas de construir cosas reales?
        </h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Estoy buscando práctica profesional o una oportunidad en desarrollo.
          Escríbeme y conversemos.
        </p>
        <div className="contact-links">
          <a href="mailto:xpacej@gmail.com" className="btn btn-primary">✉️ Escríbeme</a>
          <a href="https://www.linkedin.com/in/jairoimm/" target="_blank" rel="noreferrer" className="btn btn-ghost">🔗 LinkedIn</a>
          <a href="https://github.com/jairoimm" target="_blank" rel="noreferrer" className="btn btn-ghost">💻 GitHub</a>
        </div>
      </div>
    </section>
  );
}
