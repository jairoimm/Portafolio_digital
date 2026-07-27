import React from 'react';
import useReveal from '../hooks/useReveal';

const PROJECTS = [
  {
    icon: '🍔',
    name: 'Buen Apetito — ERP con Tienda Online',
    status: 'dev', // 'live' | 'dev' | 'done'
    statusLabel: 'EN DESARROLLO',
    problem:
      'Los negocios gastronómicos pequeños gestionan inventario, ventas y pedidos por separado, sin control de stock en tiempo real ni forma de vender online.',
    solution:
      'Sistema ERP con Django REST Framework (backend) y React (frontend): panel multi-rol para el negocio y tienda online pública para clientes, con pagos integrados.',
    bullets: [
      'Permisos por rol (dueño, administrador, cajero, cocinero) con clases de permisos personalizadas en DRF',
      'Control de inventario con reserva de stock para evitar sobreventa en pedidos simultáneos',
      'Integración de pasarela de pago Webpay Plus (Transbank): flujo pedido → pago → confirmación con manejo de idempotencia',
      'Menú público y pedidos como invitado, sin necesidad de cuenta',
      'Suite de tests automatizados (Django TestCase) cubriendo la lógica crítica de negocio',
    ],
    tags: ['Python', 'Django REST Framework', 'React', 'PostgreSQL', 'Webpay/Transbank'],
    github: 'https://github.com/jairoimm/buen_apetito_main', // TODO: reemplazar con el link directo al repo
    demo: null,
  },
  {
    icon: '📊',
    name: 'ETL Clima + IA + Power BI',
    status: 'dev', // 'live' | 'dev' | 'done'
    statusLabel: 'EN DESARROLLO',
    problem:
      'Necesidad de centralizar, automatizar y enriquecer el análisis de pronósticos climáticos mediante un pipeline moderno y escalable.',
    solution:
      'Pipeline de datos end-to-end contenerizado que extrae de una API pública, transforma y valida con Pandas, enriquece con IA, carga en PostgreSQL y conecta con Power BI y Metabase.',
    bullets: [
      'Extracción automatizada y robusta de Open-Meteo API con manejo de reintentos y validación de calidad de datos (quality_flag)',
      'Enriquecimiento analítico mediante IA (Groq/Claude) para resúmenes automáticos y explicación de anomalías climáticas',
      'Modelado dimensional en PostgreSQL (capa staging y hechos) con vistas optimizadas para reportes analíticos',
      'Infraestructura 100% en contenedores Docker y Linux (PostgreSQL, PgAdmin, Metabase) con orquestación vía Docker Compose',
      'Integración analítica lista para Power BI mediante vistas dedicadas y conexión a base de datos relacional',
    ],
    tags: ['Python', 'Pandas', 'PostgreSQL', 'Docker', 'Docker Compose', 'Power BI', 'Metabase', 'AI/Groq'],
    github: 'https://github.com/jairoimm/Data-Analytics', // TODO: actualizar con el link exacto si difiere
    demo: null,
  },
  {
    icon: '🏠',
    name: 'Arriendos — Gestión de Propiedades',
    status: 'done',
    statusLabel: 'FINALIZADO',
    problem:
      'Administrar propiedades en arriendo, arrendatarios y contratos sin una herramienta centralizada.',
    solution:
      'Aplicación web con Django que modela propiedades, arrendatarios y contratos en una base de datos relacional, con autenticación de usuarios.',
    bullets: [
      'Modelado de base de datos relacional en PostgreSQL con relaciones entre propiedades, arrendatarios y contratos',
      'Sistema de autenticación de usuarios y panel de administración',
      'Variables de entorno (python-dotenv) para separar credenciales de la lógica de la app',
    ],
    tags: ['Python', 'Django', 'PostgreSQL', 'psycopg2'],
    github: 'https://github.com/jairoimm/arriendos', // TODO: reemplazar con el link directo al repo
    demo: null,
  },
  {
    icon: '🐦',
    name: 'Aves Chile — Galería Interactiva',
    status: 'done',
    statusLabel: 'FINALIZADO',
    problem:
      'Explorar la avifauna nativa de Chile de forma visual e interactiva, no solo como lista de datos.',
    solution:
      'Aplicación en Python que consume una API externa y genera una galería de tarjetas responsiva con Bootstrap 5.',
    bullets: [
      'Consumo de API REST externa en Python para datos en tiempo real de especies',
      'Generación programática de HTML para simplificar el despliegue',
      'Interfaz responsiva adaptada a distintos dispositivos',
    ],
    tags: ['Python', 'API REST', 'Bootstrap 5'],
    github: 'https://github.com/jairoimm/Aves_Chile', // TODO: reemplazar con el link directo al repo
    demo: null,
  },
  {
    icon: '🍕',
    name: 'Ricomida — Landing Page de Recetas',
    status: 'done',
    statusLabel: 'FINALIZADO',
    problem:
      'Presentar una receta de forma atractiva, con buena experiencia de usuario en cualquier dispositivo.',
    solution:
      'Landing page frontend con animaciones de scroll y formulario de suscripción validado en JavaScript.',
    bullets: [
      'Animaciones de scroll con ScrollReveal.js',
      'Formulario de newsletter con validación en JavaScript/jQuery',
      'Interfaz responsiva con Bootstrap',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
    github: 'https://github.com/jairoimm/Ricomida', // TODO: reemplazar con el link directo al repo
    demo: null,
  },
];

function StatusPill({ status, label }) {
  return (
    <div className={`status-pill ${status}`}>
      <span className="dot"></span>{label}
    </div>
  );
}

export default function Projects() {
  const containerRef = useReveal();

  return (
    <section id="proyectos" ref={containerRef}>
      <div className="eyebrow">Registro de proyectos</div>
      <h2 className="section-title reveal">Proyectos</h2>
      <p className="section-desc reveal">
        De landing pages a sistemas completos con pagos y tests — en orden de complejidad.
      </p>

      {PROJECTS.map((p) => (
        <div className="project reveal" key={p.name}>
          <div className="project-head">
            <div className="project-name">{p.icon} {p.name}</div>
            <StatusPill status={p.status} label={p.statusLabel} />
          </div>
          <div className="project-body">
            <div className="pgrid">
              <div>
                <h4>Problema</h4>
                <p>{p.problem}</p>
              </div>
              <div>
                <h4>Solución</h4>
                <p>{p.solution}</p>
              </div>
            </div>
            <ul>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer">💻 Código</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">🔗 Demo</a>}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
