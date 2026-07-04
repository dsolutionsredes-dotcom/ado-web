'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock3,
  Facebook,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Monitor,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Workflow,
  X,
  Youtube,
} from 'lucide-react';

const whatsappNumber = '000000000';
const whatsappBase = `https://wa.me/${whatsappNumber}`;
const wa = (text) => `${whatsappBase}?text=${encodeURIComponent(text)}`;

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Próximos cursos', href: '#proximos' },
  { label: 'Contacto', href: '#contacto' },
];

const highlights = [
  { label: 'Formación especializada', icon: GraduationCap },
  { label: 'Tecnología de vanguardia', icon: Monitor },
  { label: 'Docentes expertos', icon: Users },
  { label: 'Certificación reconocida', icon: Award },
];

const courses = [
  {
    title: 'Ortodoncia Digital',
    image: '/assets/course-ortodoncia.png',
    icon: Workflow,
    text: 'Aprende planificación, diagnóstico y aplicación de técnicas modernas para tratamientos más precisos y eficientes.',
  },
  {
    title: 'Implantes Dentales',
    image: '/assets/course-implantes.png',
    icon: Stethoscope,
    text: 'Formación integral en implantología, planificación digital y procedimientos clínicos con enfoque actualizado.',
  },
  {
    title: 'Endodoncia',
    image: '/assets/course-endodoncia.png',
    icon: Microscope,
    text: 'Capacitación práctica para mejorar diagnóstico, manejo clínico y tratamiento endodóntico con criterios actuales.',
  },
  {
    title: 'Estética Dental',
    image: '/assets/course-estetica.png',
    icon: Sparkles,
    text: 'Desarrolla habilidades en rehabilitación estética, diseño de sonrisa y resultados naturales y armónicos.',
  },
];

const methodology = [
  { title: 'Teoría aplicada', text: 'Clases claras y estructuradas con enfoque en la práctica clínica real.', icon: BookOpen },
  { title: 'Prácticas guiadas', text: 'Aprendizaje paso a paso con acompañamiento de docentes especializados.', icon: ShieldCheck },
  { title: 'Casos clínicos', text: 'Análisis y resolución de casos reales o simulados para fortalecer competencias.', icon: Target },
  { title: 'Tecnología digital', text: 'Uso de herramientas y equipos digitales de última generación.', icon: Monitor },
  { title: 'Certificación', text: 'Constancia de participación y respaldo de formación profesional.', icon: CheckCircle2 },
];

const schedule = [
  { course: 'Ortodoncia Digital', date: '15 - 17 Jun 2026', mode: 'Presencial', status: 'Cupos limitados' },
  { course: 'Implantes Dentales', date: '20 - 22 Jul 2026', mode: 'Presencial', status: 'Inscripciones abiertas' },
  { course: 'Endodoncia', date: '10 - 12 Ago 2026', mode: 'Presencial', status: 'Cupos limitados' },
  { course: 'Estética Dental', date: '14 - 16 Sep 2026', mode: 'Presencial', status: 'Inscripciones abiertas' },
];

const benefits = [
  { title: 'Formación de calidad', text: 'Programas diseñados por especialistas con experiencia clínica y académica.', icon: Award },
  { title: 'Tecnología avanzada', text: 'Equipos y herramientas digitales de alto nivel.', icon: Monitor },
  { title: 'Aprendizaje práctico', text: 'Enfoque en la aplicación real de los conocimientos.', icon: GraduationCap },
  { title: 'Para todos los niveles', text: 'Dirigido a estudiantes, odontólogos y profesionales interesados en especializarse.', icon: Users },
  { title: 'Actualización constante', text: 'Contenido actualizado según tendencias y avances en odontología.', icon: Clock3 },
];

function BrandLogo() {
  return (
    <a href="#inicio" className="brand" aria-label="ADO Academia Digital">
      <span className="brand-word">
        <span>A</span><span>D</span><span className="brand-o"><i /></span>
      </span>
      <small>Academia Digital</small>
    </a>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.68, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, centered = false, dark = false }) {
  return (
    <div className={`section-title ${centered ? 'centered' : ''} ${dark ? 'dark' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="animated-bg" />
      <div className="tooth-shape tooth-one" />
      <div className="tooth-shape tooth-two" />

      <header className="site-header">
        <div className="container header-inner">
          <BrandLogo />

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </nav>

          <a className="header-cta" href={wa('Hola, deseo solicitar información sobre los cursos de ADO Academia Digital.')} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> Solicitar información
          </a>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Aprende. Practica. Transforma.</p>
            <h1>Formación avanzada en odontología digital <span>para el futuro profesional.</span></h1>
            <p className="lead">Programas especializados, tecnología de vanguardia y metodologías prácticas para llevar tu carrera al siguiente nivel.</p>

            <div className="hero-actions">
              <a className="btn btn-gold" href={wa('Hola, quiero recibir información sobre ADO Academia Digital.')} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Solicitar información
              </a>
              <a className="btn btn-light" href="#cursos">Ver cursos</a>
            </div>

            <div className="hero-features">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="feature-mini" key={item.label}>
                    <Icon size={24} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="hero-media" delay={0.1}>
            <div className="hero-photo">
              <Image src="/assets/hero-main.png" alt="Tecnología dental digital" fill priority className="cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="nosotros" className="about-section tone-beige">
        <div className="container about-layout">
          <Reveal className="about-photo-wrap">
            <div className="about-photo">
              <Image src="/assets/about-main.png" alt="Formación práctica dental" fill className="cover" />
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={0.05}>
            <p className="eyebrow">Sobre ADO</p>
            <h2>Academia Digital</h2>
            <p>En ADO Academia Digital formamos profesionales y futuros especialistas de la odontología mediante programas actualizados, prácticos y enfocados en la aplicación clínica real.</p>
            <p>Integramos conocimiento avanzado, tecnología digital y metodologías modernas para que cada alumno desarrolle habilidades precisas, seguras y eficaces en el área odontológica.</p>
          </Reveal>

          <div className="mission-stack">
            <Reveal className="mission-card" delay={0.08}>
              <Target size={28} />
              <div>
                <h3>Misión</h3>
                <p>Formar y capacitar a profesionales de la odontología con conocimientos avanzados en tecnología digital, ofreciendo cursos especializados en Ortodoncia, Implantes, Endodoncia y Estética Dental.</p>
              </div>
            </Reveal>
            <Reveal className="mission-card" delay={0.12}>
              <Sparkles size={28} />
              <div>
                <h3>Visión</h3>
                <p>Ser la academia de referencia líder en odontología digital en la región, reconocida por la calidad de su enseñanza, la actualización constante y la integración de las últimas tecnologías.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="cursos" className="courses-section tone-white">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Áreas de formación" title="Cursos especializados" centered />
          </Reveal>

          <div className="course-grid">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Reveal className="course-card" key={course.title} delay={index * 0.05}>
                  <div className="course-image">
                    <Image src={course.image} alt={course.title} fill className="cover" />
                  </div>
                  <div className="course-icon"><Icon size={22} /></div>
                  <div className="course-body">
                    <h3>{course.title}</h3>
                    <p>{course.text}</p>
                    <a href={wa(`Hola, deseo información sobre ${course.title}.`)} target="_blank" rel="noreferrer">Ver curso <ArrowRight size={14} /></a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodologia" className="method-section tone-dark">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Nuestra metodología" title="Aprendizaje que transforma" centered dark /></Reveal>
          <div className="method-grid">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="method-item" key={item.title} delay={index * 0.04}>
                  <Icon size={30} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proximos" className="schedule-section tone-cream">
        <div className="container schedule-layout">
          <Reveal className="dates-card">
            <p className="eyebrow">Próximas fechas</p>
            <h2>Fechas próximas</h2>
            <div className="schedule-table">
              <div className="table-head"><span>Curso</span><span>Fecha</span><span>Modalidad</span><span>Estado</span></div>
              {schedule.map((row) => (
                <div className="table-row" key={row.course}>
                  <span>{row.course}</span>
                  <span>{row.date}</span>
                  <span>{row.mode}</span>
                  <strong className={row.status.includes('abiertas') ? 'open' : 'limited'}>{row.status}</strong>
                </div>
              ))}
            </div>
            <a className="btn btn-outline-gold" href={wa('Hola, quiero información sobre las próximas fechas de ADO Academia Digital.')} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> Solicitar información por WhatsApp
            </a>
          </Reveal>

          <Reveal className="why-card" delay={0.06}>
            <p className="eyebrow">¿Por qué elegir ADO?</p>
            <h2>Tu crecimiento es nuestra prioridad.</h2>
            <div className="benefit-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="benefit-item" key={item.title}>
                    <Icon size={23} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="contact-section tone-white">
        <div className="container contact-layout">
          <Reveal className="contact-copy">
            <p className="eyebrow">Solicita información</p>
            <h2>Déjanos tus datos</h2>
            <p>Completa el formulario y nuestro equipo se comunicará contigo para brindarte toda la información sobre nuestros cursos, fechas, modalidades e inscripción.</p>
            <p className="note">Formulario demostrativo: por ahora no envía datos. El botón dirige a WhatsApp.</p>
          </Reveal>

          <Reveal className="contact-form" delay={0.06}>
            <form>
              <div className="form-grid three">
                <label>Nombre completo *<input placeholder="Tu nombre completo" /></label>
                <label>WhatsApp *<input placeholder="Tu número de WhatsApp" /></label>
                <label>Correo electrónico *<input placeholder="tu@email.com" /></label>
              </div>
              <div className="form-grid two">
                <label>Curso de interés *
                  <select defaultValue=""><option value="" disabled>Selecciona un curso</option>{courses.map((course) => <option key={course.title}>{course.title}</option>)}</select>
                </label>
                <label>Mensaje (opcional)<textarea placeholder="Escribe tu mensaje" rows="4" /></label>
              </div>
              <a className="btn btn-gold submit" href={wa('Hola, deseo enviar mi solicitud de información para ADO Academia Digital.')} target="_blank" rel="noreferrer"><Send size={17} /> Enviar solicitud</a>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="footer tone-dark">
        <div className="container footer-grid">
          <div>
            <BrandLogo />
            <p>Formación avanzada en odontología digital para impulsar tu futuro profesional.</p>
            <div className="socials"><Instagram /><Facebook /><Youtube /></div>
          </div>
          <div>
            <h3>Enlaces rápidos</h3>
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div>
            <h3>Contacto</h3>
            <p><MessageCircle size={16} /> +00 000 000 000</p>
            <p><Mail size={16} /> contacto@adoacademiadigital.com</p>
            <p><MapPin size={16} /> Ciudad, País</p>
            <p><Clock3 size={16} /> Lunes a sábado: 9:00 a. m. - 6:00 p. m.</p>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 ADO Academia Digital.</span><span>Política de privacidad | Términos y condiciones</span></div>
      </footer>

      <a className="floating-whatsapp" href={wa('Hola, deseo recibir información de ADO Academia Digital.')} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={28} />
      </a>
    </main>
  );
}
