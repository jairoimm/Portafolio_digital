import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('es-CL', { hour12: false }));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar">
      <div className="brand">
        <span className="dot"></span> jairo<span style={{ color: 'var(--muted)' }}>.dev</span>
      </div>
      <div className="navlinks">
        <a href="#stack">Stack</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="status-clock">SYS.TIME {time}</div>
    </div>
  );
}
