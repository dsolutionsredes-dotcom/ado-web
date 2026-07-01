'use client';

import { useEffect } from 'react';

const whatsappNumber = '000000000';
const whatsappText = encodeURIComponent('Hola ADO Academia Digital, deseo solicitar información sobre sus cursos.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

const courses = [
  {
    title: 'Ortodoncia Digital',
    text: 'Planificación, diagnóstico y aplicación de técnicas modernas para tratamientos ortodónticos precisos y eficientes.',
    icon: '▦',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Implantes Dentales',
    text: 'Fundamentos, planificación y procedimientos relacionados con implantología moderna y seguridad clínica.',
    icon: '⌁',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Endodoncia',
    text: 'Capacitación práctica para mejorar diagnóstico, manejo clínico y protocolos endodónticos actuales.',
    icon: '◌',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Estética Dental',
    text: 'Diseño de sonrisa, rehabilitación estética y procedimientos orientados a resultados naturales.',
    icon: '✦',
    image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=900&q=80',
  },
];

const methodology = [
  ['Teoría aplicada', 'Clases claras, estructuradas y conectadas con la práctica clínica real.'],
  ['Prácticas guiadas', 'Aprendizaje paso a paso con acompañamiento docente especializado.'],
  ['Casos clínicos', 'Análisis y resolución de casos para fortalecer tus competencias.'],
  ['Tecnología digital', 'Uso de herramientas, flujos y equipos digitales de nueva generación.'],
  ['Certificación', 'Constancia de participación que respalda tu formación profesional.'],
];

const nextCourses = [
  ['Ortodoncia Digital', '15 - 17 Jun 2026', 'Presencial', 'Cupos limitados'],
  ['Implantes Dentales', '20 - 22 Jul 2026', 'Presencial', 'Inscripciones abiertas'],
  ['Endodoncia', '10 - 12 Ago 2026', 'Presencial', 'Cupos limitados'],
  ['Estética Dental', '14 - 16 Sep 2026', 'Presencial', 'Inscripciones abiertas'],
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="ADO Academia Digital">
          <img src="/ado-logo.svg" alt="ADO Academia Digital" />
        </a>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#cursos">Cursos</a>
          <a href="#metodologia">Metodología</a>
          <a href="#proximos">Próximos cursos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Solicitar información
        </a>
      </header>

      <section id="inicio" className="hero clean-section">
        <div className="hero-content" data-reveal>
          <p className="eyebrow">Formación que transforma sonrisas</p>
          <h1>
            Formación avanzada en <span>odontología digital</span>
          </h1>
          <p className="hero-text">
            Especialízate en Ortodoncia, Implantes, Endodoncia y Estética Dental con una metodología práctica,
            tecnología de vanguardia y docentes expertos.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn primary">Solicitar información</a>
            <a href="#cursos" className="btn secondary">Ver cursos</a>
          </div>
          <div className="hero-features">
            <span>Formación especializada</span>
            <span>Tecnología digital</span>
            <span>Docentes expertos</span>
            <span>Certificación</span>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="scanner-card floating-card">
            <div className="screen-lines" />
            <div className="teeth-model" />
          </div>
        </div>
      </section>

      <section id="nosotros" className="about section-dark clean-section">
        <div className="container grid-two">
          <div className="photo-card" data-reveal />
          <div data-reveal>
            <p className="eyebrow">Sobre ADO</p>
            <h2>Academia Digital</h2>
            <p>
              En ADO Academia Digital formamos profesionales y futuros especialistas de la odontología mediante programas
              actualizados, prácticos y enfocados en la aplicación clínica real.
            </p>
            <p>
              Integramos conocimientos avanzados, tecnología digital y metodologías modernas para que cada alumno desarrolle
              habilidades precisas, seguras y eficaces en el área odontológica.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision clean-light">
        <div className="container mission-grid">
          <article data-reveal>
            <span className="section-icon">◎</span>
            <h3>Misión</h3>
            <p>
              Formar y capacitar a profesionales de la odontología con conocimientos avanzados en tecnología digital,
              ofreciendo cursos especializados en Ortodoncia, Implantes, Endodoncia y Estética Dental.
            </p>
            <p>
              A través de metodologías prácticas, actualizadas y respaldadas por la innovación, buscamos desarrollar
              habilidades precisas, seguras y eficaces.
            </p>
          </article>
          <article data-reveal>
            <span className="section-icon">◉</span>
            <h3>Visión</h3>
            <p>
              Ser la academia de referencia líder en odontología digital en la región, reconocida por la calidad de su
              enseñanza, la actualización constante y la integración de las últimas tecnologías.
            </p>
            <p>
              Aspiramos a formar profesionales competentes, innovadores y comprometidos con el progreso de la odontología moderna.
            </p>
          </article>
        </div>
      </section>

      <section id="cursos" className="courses clean-light">
        <div className="container" data-reveal>
          <p className="eyebrow centered">Cursos especializados</p>
          <h2 className="centered-title">Áreas de formación</h2>
        </div>
        <div className="container course-grid">
          {courses.map(course => (
            <article className="course-card" key={course.title} data-reveal>
              <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}>
                <span>{course.icon}</span>
              </div>
              <div className="course-body">
                <h3>{course.title}</h3>
                <p>{course.text}</p>
                <a href="#contacto" className="mini-btn">Solicitar información</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="metodologia" className="methodology section-dark clean-section">
        <div className="container" data-reveal>
          <p className="eyebrow centered">Nuestra metodología</p>
          <h2 className="centered-title light">Aprendizaje que transforma</h2>
        </div>
        <div className="container methodology-grid">
          {methodology.map(([title, text], index) => (
            <article className="method-card" key={title} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proximos" className="split-section clean-section">
        <div className="split-left" data-reveal>
          <p className="eyebrow">Próximos cursos</p>
          <h2>Fechas próximas</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Curso</th>
                  <th>Fecha</th>
                  <th>Modalidad</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {nextCourses.map(row => (
                  <tr key={row[0]}>
                    {row.map(cell => <td key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a className="btn primary compact" href={whatsappLink} target="_blank" rel="noreferrer">Solicitar por WhatsApp</a>
        </div>
        <div className="split-right" data-reveal>
          <p className="eyebrow">¿Por qué elegir ADO?</p>
          <h2>Tu crecimiento es nuestra prioridad</h2>
          <div className="benefit-grid">
            <div><strong>Formación de calidad</strong><span>Programas diseñados por especialistas.</span></div>
            <div><strong>Tecnología avanzada</strong><span>Equipos y herramientas digitales de alto nivel.</span></div>
            <div><strong>Aprendizaje práctico</strong><span>Enfoque en la aplicación del conocimiento.</span></div>
            <div><strong>Para todos los niveles</strong><span>Dirigido a estudiantes y profesionales interesados.</span></div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact clean-light">
        <div className="container contact-grid">
          <div data-reveal>
            <p className="eyebrow">Solicita información</p>
            <h2>Déjanos tus datos</h2>
            <p>
              Completa el formulario y nuestro equipo se comunicará contigo para brindarte información sobre cursos,
              fechas, modalidad e inscripción.
            </p>
          </div>
          <form className="lead-form" data-reveal>
            <label>Nombre completo<input type="text" placeholder="Tu nombre completo" /></label>
            <label>WhatsApp<input type="tel" placeholder="Tu número de WhatsApp" /></label>
            <label>Correo electrónico<input type="email" placeholder="tu@email.com" /></label>
            <label>Curso de interés
              <select defaultValue="">
                <option value="" disabled>Selecciona un curso</option>
                <option>Ortodoncia Digital</option>
                <option>Implantes Dentales</option>
                <option>Endodoncia</option>
                <option>Estética Dental</option>
              </select>
            </label>
            <label className="full">Mensaje<textarea placeholder="Escribe tu mensaje" /></label>
            <button type="button" className="btn primary form-button">Enviar solicitud</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="/ado-logo.svg" alt="ADO Academia Digital" />
            <p>Formación avanzada en odontología digital para impulsar tu futuro profesional.</p>
          </div>
          <div>
            <h4>Enlaces rápidos</h4>
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
            <a href="#metodologia">Metodología</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>+00 000 000 000</p>
            <p>contacto@adoacademiadigital.com</p>
            <p>Ciudad, País</p>
          </div>
        </div>
        <div className="copyright">© 2026 ADO Academia Digital. Todos los derechos reservados.</div>
      </footer>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp">
        <span>☎</span>
      </a>
    </main>
  );
}
