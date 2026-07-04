'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const whatsappNumber = '000000000';
const waBase = `https://wa.me/${whatsappNumber}`;

const courses = [
  {
    title: 'Ortodoncia Digital',
    description: 'Aprende planificación, diagnóstico y aplicación de técnicas modernas para tratamientos ortodónticos más precisos y eficientes.',
    image: '/assets/curso-ortodoncia.png',
    icon: '⎯⎯⎯'
  },
  {
    title: 'Implantes Dentales',
    description: 'Formación integral en implantología y procedimientos quirúrgicos y protésicos con planificación digital avanzada.',
    image: '/assets/curso-implantes.png',
    icon: '◔'
  },
  {
    title: 'Endodoncia',
    description: 'Capacitación práctica para mejorar el diagnóstico, manejo clínico y tratamiento endodóntico con criterios actuales.',
    image: '/assets/curso-endodoncia.png',
    icon: '⌇'
  },
  {
    title: 'Estética Dental',
    description: 'Desarrolla habilidades en rehabilitación estética, diseño de sonrisa y procedimientos orientados a resultados naturales y armónicos.',
    image: '/assets/curso-estetica.png',
    icon: '✦'
  }
];

const methodology = [
  ['Teoría aplicada', 'Clases claras y estructuradas con enfoque en la práctica clínica real.'],
  ['Prácticas guiadas', 'Aprendizaje paso a paso con acompañamiento de docentes especialistas.'],
  ['Casos clínicos', 'Análisis y resolución de casos reales o simulados para fortalecer competencias.'],
  ['Tecnología digital', 'Uso de herramientas y equipos digitales de última generación.'],
  ['Certificación', 'Constancia de participación que respalda tu formación profesional.']
];

const reasons = [
  ['Formación de calidad', 'Programas diseñados por especialistas con experiencia clínica y académica.'],
  ['Tecnología avanzada', 'Equipos y herramientas digitales de alto nivel.'],
  ['Aprendizaje práctico', 'Enfoque en la aplicación real de los conocimientos.'],
  ['Para todos los niveles', 'Dirigido a estudiantes, odontólogos y profesionales interesados en especializarse.'],
  ['Actualización constante', 'Contenido actualizado según las últimas tendencias y avances en odontología.']
];

const dates = [
  ['Ortodoncia Digital', '15 - 17 Jun 2025', 'Presencial', 'Cupos limitados'],
  ['Implantes Dentales', '20 - 22 Jul 2025', 'Presencial', 'Inscripciones abiertas'],
  ['Endodoncia', '10 - 12 Ago 2025', 'Presencial', 'Cupos limitados'],
  ['Estética Dental', '14 - 16 Sep 2025', 'Presencial', 'Inscripciones abiertas']
];

function whatsappLink(message) {
  return `${waBase}?text=${encodeURIComponent(message)}`;
}

function SectionTitle({ label, title, center=false }) {
  return (
    <div className={center ? 'section-head center' : 'section-head'}>
      <span>{label}</span>
      {title ? <h2>{title}</h2> : null}
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="page-shell">
      <div className="tooth-bg tooth-bg-one" />
      <div className="tooth-bg tooth-bg-two" />

      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand">
            <Image src="/assets/logo-ado.png" alt="ADO Academia Digital" width={210} height={72} priority />
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
            <a href="#cursos" onClick={() => setMenuOpen(false)}>Cursos</a>
            <a href="#metodologia" onClick={() => setMenuOpen(false)}>Metodología</a>
            <a href="#fechas" onClick={() => setMenuOpen(false)}>Próximos cursos</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          </nav>

          <a className="cta cta-solid desktop-cta" href={whatsappLink('Hola, deseo solicitar información sobre ADO Academia Digital')}>
            Solicitar información
          </a>
        </div>
      </header>

      <section id="inicio" className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Aprende. Practica. Transforma.</p>
            <h1>
              Formación avanzada en odontología digital <span>para el futuro profesional.</span>
            </h1>
            <p className="hero-text">
              Programas especializados, tecnología de vanguardia y metodologías prácticas para llevar tu carrera al siguiente nivel.
            </p>
            <div className="hero-actions">
              <a className="cta cta-solid" href={whatsappLink('Hola, quiero solicitar información sobre los cursos de ADO Academia Digital')}>Solicitar información</a>
              <a className="cta cta-outline" href="#cursos">Ver cursos</a>
            </div>
            <div className="hero-features">
              <div><strong>Formación</strong><span>especializada</span></div>
              <div><strong>Tecnología</strong><span>de vanguardia</span></div>
              <div><strong>Docentes</strong><span>expertos</span></div>
              <div><strong>Certificación</strong><span>reconocida</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-blend">
              <Image src="/assets/hero-digital.png" alt="Tecnología digital dental" fill sizes="(max-width: 900px) 100vw, 48vw" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="about section-pad-sm">
        <div className="container about-grid">
          <div className="about-image card-soft">
            <Image src="/assets/about-ado.png" alt="Clase práctica de odontología" width={900} height={680} />
          </div>

          <div className="about-copy">
            <SectionTitle label="Sobre ADO" title="Academia Digital" />
            <p>
              En ADO Academia Digital formamos profesionales y futuros especialistas de la odontología mediante programas actualizados, prácticos y enfocados en la aplicación clínica real.
            </p>
            <p>
              Integramos conocimiento avanzado, tecnología digital y metodologías modernas para que cada alumno desarrolle habilidades precisas, seguras y eficaces en el área odontológica.
            </p>
          </div>

          <div className="mission-stack">
            <article className="info-card">
              <h3>Misión</h3>
              <p>Formar y capacitar a profesionales de la odontología con conocimientos avanzados en tecnología digital, ofreciendo cursos especializados en Ortodoncia, Implantes, Endodoncia y Estética Dental.</p>
            </article>
            <article className="info-card">
              <h3>Visión</h3>
              <p>Ser la academia de referencia líder en odontología digital en la región, reconocida por la calidad de su enseñanza, la actualización constante y la integración de las últimas tecnologías.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="cursos" className="courses section-pad-sm">
        <div className="container">
          <SectionTitle label="Áreas de formación" center />
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <div className="course-image">
                  <Image src={course.image} alt={course.title} width={800} height={600} />
                </div>
                <div className="course-icon">{course.icon}</div>
                <div className="course-body">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <a href={whatsappLink(`Hola, deseo información sobre el curso de ${course.title}`)}>Ver curso</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodologia" className="method section-pad-sm">
        <div className="container">
          <SectionTitle label="Nuestra metodología" title="Aprendizaje que transforma" center />
          <div className="method-grid">
            {methodology.map(([title, text]) => (
              <article className="method-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="two-col section-pad-sm">
        <div className="container two-col-grid">
          <div id="fechas" className="table-box">
            <SectionTitle label="Próximas fechas" />
            <div className="dates-table">
              <div className="thead"><span>Curso</span><span>Fecha</span><span>Modalidad</span><span>Estado</span></div>
              {dates.map((row) => (
                <div className="trow" key={row[0]}>
                  <span>{row[0]}</span>
                  <span>{row[1]}</span>
                  <span>{row[2]}</span>
                  <span className={row[3].includes('abiertas') ? 'status-open' : 'status-limited'}>{row[3]}</span>
                </div>
              ))}
            </div>
            <a className="cta cta-outline wide" href={whatsappLink('Hola, quiero información sobre próximas fechas de cursos')}>Solicitar información por WhatsApp</a>
          </div>

          <div className="reasons-box">
            <SectionTitle label="¿Por qué elegir ADO?" title="Tu crecimiento es nuestra prioridad." />
            <div className="reasons-grid">
              {reasons.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact section-pad-sm">
        <div className="container contact-box">
          <div className="contact-copy">
            <SectionTitle label="Solicita información" title="Déjanos tus datos" />
            <p>
              Completa el formulario y nuestro equipo se comunicará contigo para brindarte toda la información sobre nuestros cursos, fechas, modalidad e inscripción.
            </p>
            <p className="demo-note">Formulario demostrativo: por ahora los botones dirigen a WhatsApp.</p>
          </div>

          <form className="form-grid" action={whatsappLink('Hola, deseo más información sobre ADO Academia Digital')}>
            <label>
              Nombre completo *
              <input type="text" placeholder="Tu nombre completo" />
            </label>
            <label>
              WhatsApp *
              <input type="text" placeholder="Tu número de WhatsApp" />
            </label>
            <label>
              Correo electrónico *
              <input type="email" placeholder="tucorreo@email.com" />
            </label>
            <label>
              Curso de interés *
              <select defaultValue="">
                <option value="" disabled>Selecciona un curso</option>
                {courses.map((course) => <option key={course.title}>{course.title}</option>)}
              </select>
            </label>
            <label className="full">
              Mensaje (opcional)
              <textarea rows="4" placeholder="Escribe tu mensaje" />
            </label>
            <div className="form-action full">
              <button className="cta cta-solid" type="submit">Enviar solicitud</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Image src="/assets/logo-ado.png" alt="ADO Academia Digital" width={170} height={58} />
            <p>Formación avanzada en odontología digital para impulsar tu futuro profesional.</p>
          </div>
          <div>
            <h4>Enlaces rápidos</h4>
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#cursos">Cursos</a>
            <a href="#metodologia">Metodología</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>+00 000 000 000</p>
            <p>contacto@adoacademiadigital.com</p>
            <p>Ciudad, País</p>
            <p>Lunes a sábado: 9:00 a.m. – 6:00 p.m.</p>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© {year} ADO Academia Digital. Todos los derechos reservados.</span>
          <span>Política de privacidad | Términos y condiciones</span>
        </div>
      </footer>

      <a className="floating-wa" href={whatsappLink('Hola, deseo información sobre ADO Academia Digital')} aria-label="WhatsApp">
        <span>W</span>
      </a>
    </main>
  );
}
