'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  Users,
  Workflow,
  X,
  Youtube,
  Facebook,
  MessageCircle,
  Send,
  BrainCircuit,
  BadgeCheck,
  Microscope,
} from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = '000000000';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, deseo solicitar información sobre los cursos de ADO Academia Digital.')}`;

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Próximos cursos', href: '#proximos' },
  { label: 'Contacto', href: '#contacto' },
];

const courses = [
  {
    title: 'Ortodoncia Digital',
    text: 'Aprende planificación diagnóstica y aplicación de tecnologías para tratamientos ortodóncicos más precisos y eficientes.',
    icon: Workflow,
    image: 'aligners',
  },
  {
    title: 'Implantes Dentales',
    text: 'Formación integral en fundamentos, planificación y procedimientos relacionados con implantología moderna y regeneración ósea.',
    icon: Stethoscope,
    image: 'implant',
  },
  {
    title: 'Endodoncia',
    text: 'Capacitación práctica para mejorar el diagnóstico, manejo clínico y tratamiento endodóntico con criterios actuales.',
    icon: Microscope,
    image: 'endo',
  },
  {
    title: 'Estética Dental',
    text: 'Desarrolla habilidades en rehabilitación estética, diseño de sonrisa y procedimientos restauradores armónicos.',
    icon: Sparkles,
    image: 'smile',
  },
];

const methodology = [
  { title: 'Teoría aplicada', text: 'Clases claras y estructuradas con enfoque clínico real.', icon: BookOpen },
  { title: 'Prácticas guiadas', text: 'Aprendizaje paso a paso con acompañamiento docente.', icon: GraduationCap },
  { title: 'Casos clínicos', text: 'Análisis y resolución de casos reales para fortalecer competencias.', icon: Target },
  { title: 'Tecnología digital', text: 'Uso de herramientas y equipos digitales de última generación.', icon: MonitorCog },
  { title: 'Certificación', text: 'Constancia de participación que respalda tu formación profesional.', icon: Award },
];

const upcoming = [
  { course: 'Ortodoncia Digital', date: '15 - 17 Jun 2026', mode: 'Presencial', status: 'Cupos limitados' },
  { course: 'Implantes Dentales', date: '20 - 22 Jul 2026', mode: 'Presencial', status: 'Inscripciones abiertas' },
  { course: 'Endodoncia', date: '10 - 12 Ago 2026', mode: 'Presencial', status: 'Cupos limitados' },
  { course: 'Estética Dental', date: '14 - 16 Sep 2026', mode: 'Presencial', status: 'Inscripciones abiertas' },
];

const why = [
  { title: 'Formación de calidad', text: 'Programas diseñados por especialistas con experiencia clínica y académica.', icon: Star },
  { title: 'Tecnología avanzada', text: 'Equipo y herramientas digitales para una formación actualizada.', icon: MonitorCog },
  { title: 'Aprendizaje práctico', text: 'Enfoque en la aplicación real de los conocimientos.', icon: Users },
  { title: 'Para todos los niveles', text: 'Dirigido a estudiantes, odontólogos y profesionales interesados en especializarse.', icon: BadgeCheck },
  { title: 'Actualización constante', text: 'Contenido alineado con tendencias y avances de la odontología moderna.', icon: Clock },
];

function Logo() {
  return (
    <a href="#inicio" className="logo" aria-label="ADO Academia Digital">
      <span className="logo-mark">
        <span>A</span><span>D</span><span className="logo-o">O</span>
      </span>
      <small>Academia Digital</small>
    </a>
  );
}

function SectionReveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-90px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <Logo />
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={16} /> Solicitar información
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="inicio" className="hero section-dark">
        <div className="hero-grid container">
          <SectionReveal className="hero-copy">
            <p className="eyebrow">Academia especializada</p>
            <h1>Formación avanzada en <span>odontología digital</span></h1>
            <p className="hero-text">Especialízate en Ortodoncia, Implantes, Endodoncia y Estética Dental con una metodología práctica, moderna y orientada a resultados clínicos reales.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Hablar por WhatsApp</a>
              <a className="btn btn-outline" href="#cursos">Ver cursos</a>
            </div>
            <div className="hero-features">
              <span><GraduationCap /> Formación especializada</span>
              <span><MonitorCog /> Tecnología digital</span>
              <span><Users /> Docentes expertos</span>
              <span><ShieldCheck /> Certificación</span>
            </div>
          </SectionReveal>

          <SectionReveal className="hero-visual">
            <div className="scanner-card">
              <div className="scan-screen">
                <div className="tooth-model"></div>
                <div className="ui-lines"><i></i><i></i><i></i><i></i></div>
              </div>
              <div className="scanner-device"></div>
              <div className="dental-model"></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="nosotros" className="about section-dark">
        <div className="container about-grid">
          <SectionReveal className="about-image">
            <div className="photo-card clinician"></div>
          </SectionReveal>
          <SectionReveal className="about-content">
            <p className="eyebrow">Sobre ADO</p>
            <h2>Academia Digital</h2>
            <p>En ADO Academia Digital formamos profesionales y futuros especialistas de la odontología mediante programas actualizados, prácticos y enfocados en la aplicación clínica real.</p>
            <p>Integramos conocimientos avanzados, tecnología digital y metodologías modernas para que cada alumno desarrolle habilidades precisas, seguras y eficaces en el área odontológica.</p>
          </SectionReveal>
        </div>

        <div className="container mission-grid">
          <SectionReveal className="info-box">
            <Target className="box-icon" />
            <h3>Misión</h3>
            <p>Formar y capacitar a profesionales de la odontología con conocimientos avanzados en tecnología digital, ofreciendo cursos especializados en Ortodoncia, Implantes, Endodoncia y Estética Dental.</p>
            <p>A través de metodologías prácticas, actualizadas y respaldadas por la innovación, buscamos desarrollar habilidades precisas, seguras y eficaces que permitan brindar tratamientos de excelencia.</p>
          </SectionReveal>
          <SectionReveal className="info-box">
            <BrainCircuit className="box-icon" />
            <h3>Visión</h3>
            <p>Ser la academia de referencia líder en odontología digital en la región, reconocida por la calidad de su enseñanza, la actualización constante y la integración de las últimas tecnologías.</p>
            <p>Aspiramos a formar profesionales competentes, innovadores y comprometidos, contribuyendo al progreso de la odontología moderna.</p>
          </SectionReveal>
        </div>
      </section>

      <section id="cursos" className="courses section-light">
        <div className="container">
          <SectionReveal className="section-title centered">
            <p className="eyebrow">Cursos especializados</p>
            <h2>Áreas de formación</h2>
          </SectionReveal>
          <div className="course-grid">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <SectionReveal key={course.title} className="course-card">
                  <div className={`course-image ${course.image}`}></div>
                  <div className="course-icon"><Icon size={26} /></div>
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="mini-btn"><MessageCircle size={15} /> Solicitar información</a>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodologia" className="methodology section-dark">
        <div className="container">
          <SectionReveal className="section-title centered">
            <p className="eyebrow">Nuestra metodología</p>
            <h2>Aprendizaje que transforma</h2>
          </SectionReveal>
          <div className="method-grid">
            {methodology.map((item) => {
              const Icon = item.icon;
              return (
                <SectionReveal key={item.title} className="method-item">
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proximos" className="upcoming-wrap">
        <div className="upcoming-left">
          <SectionReveal>
            <p className="eyebrow">Próximos cursos</p>
            <h2>Fechas próximas</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Curso</th><th>Fecha</th><th>Modalidad</th><th>Estado</th></tr></thead>
                <tbody>
                  {upcoming.map((row) => <tr key={row.course}><td>{row.course}</td><td>{row.date}</td><td>{row.mode}</td><td><span>{row.status}</span></td></tr>)}
                </tbody>
              </table>
            </div>
            <a className="btn btn-gold table-btn" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Solicitar información por WhatsApp</a>
          </SectionReveal>
        </div>
        <div className="upcoming-right section-dark">
          <SectionReveal>
            <p className="eyebrow">¿Por qué elegir ADO?</p>
            <h2>Tu crecimiento es nuestra prioridad</h2>
            <div className="why-grid">
              {why.map((item) => {
                const Icon = item.icon;
                return <div key={item.title} className="why-item"><Icon /><div><h3>{item.title}</h3><p>{item.text}</p></div></div>;
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="contacto" className="contact section-light">
        <div className="container contact-grid">
          <SectionReveal className="contact-copy">
            <p className="eyebrow">Solicita información</p>
            <h2>Déjanos tus datos</h2>
            <p>Completa el formulario y nuestro equipo se comunicará contigo para brindarte orientación sobre nuestros cursos, fechas, modalidad e inscripción.</p>
            <p className="notice">Formulario demostrativo: por ahora no envía datos. Los botones dirigen a WhatsApp.</p>
          </SectionReveal>
          <SectionReveal className="contact-form" as="div">
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Nombre completo *<input placeholder="Tu nombre completo" /></label>
              <label>WhatsApp *<input placeholder="Tu número de WhatsApp" /></label>
              <label>Correo electrónico *<input placeholder="tu@email.com" /></label>
              <label>Curso de interés *
                <select defaultValue=""><option value="" disabled>Selecciona un curso</option>{courses.map(c => <option key={c.title}>{c.title}</option>)}</select>
              </label>
              <label className="full">Mensaje opcional<textarea placeholder="Escribe tu mensaje" rows="4" /></label>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-gold submit-link"><Send size={17} /> Enviar solicitud</a>
            </form>
          </SectionReveal>
        </div>
      </section>

      <footer className="footer section-dark">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>Formación avanzada en odontología digital para impulsar tu futuro profesional.</p>
            <div className="socials"><Instagram /><Facebook /><Youtube /><MessageCircle /></div>
          </div>
          <div>
            <h3>Enlaces rápidos</h3>
            {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div>
            <h3>Contacto</h3>
            <p><Phone /> +00 000 000 000</p>
            <p><Mail /> contacto@adoacademiadigital.com</p>
            <p><MapPin /> Ciudad, País</p>
            <p><Clock /> Lunes a sábado 9:00 a.m. - 6:00 p.m.</p>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 ADO Academia Digital. Todos los derechos reservados.</span><span>Política de privacidad | Términos y condiciones</span></div>
      </footer>

      <a href={whatsappLink} className="floating-whatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
    </main>
  );
}
