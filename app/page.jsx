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
  { label: 'Tecnología digital', icon: Monitor },
  { label: 'Docentes expertos', icon: Users },
  { label: 'Certificación de participación', icon: Award },
];

const courses = [
  {
    title: 'Ortodoncia Digital',
    image: '/assets/ortodoncia.png',
    icon: Workflow,
    text: 'Aprende planificación, diagnóstico y técnicas digitales para tratamientos más precisos y eficientes.',
  },
  {
    title: 'Implantes Dentales',
    image: '/assets/implantes.png',
    icon: Stethoscope,
    text: 'Formación integral en fundamentos, planificación y procedimientos relacionados con implantología moderna.',
  },
  {
    title: 'Endodoncia',
    image: '/assets/endodoncia.png',
    icon: Microscope,
    text: 'Capacitación práctica para mejorar el diagnóstico, manejo clínico y tratamiento endodóntico.',
  },
  {
    title: 'Estética Dental',
    image: '/assets/estetica.png',
    icon: Sparkles,
    text: 'Desarrolla habilidades en rehabilitación estética, diseño de sonrisa y procedimientos armónicos.',
  },
];

const methodology = [
  { title: 'Teoría aplicada', text: 'Clases claras y estructuradas con enfoque clínico real.', icon: BookOpen },
  { title: 'Prácticas guiadas', text: 'Aprendizaje paso a paso con acompañamiento docente.', icon: ShieldCheck },
  { title: 'Casos clínicos', text: 'Análisis y resolución de casos para fortalecer competencias.', icon: Target },
  { title: 'Tecnología digital', text: 'Uso de herramientas y equipos digitales de última generación.', icon: Monitor },
  { title: 'Certificación', text: 'Constancia de participación que respalda tu formación.', icon: CheckCircle2 },
];

const schedule = [
  { name: 'Ortodoncia Digital', date: '15 - 17 Jun 2026', mode: 'Presencial', status: 'Cupos limitados' },
  { name: 'Implantes Dentales', date: '20 - 22 Jul 2026', mode: 'Presencial', status: 'Inscripciones abiertas' },
  { name: 'Endodoncia', date: '10 - 12 Ago 2026', mode: 'Presencial', status: 'Cupos limitados' },
  { name: 'Estética Dental', date: '14 - 16 Sep 2026', mode: 'Presencial', status: 'Inscripciones abiertas' },
];

const benefits = [
  { title: 'Formación de calidad', text: 'Programas diseñados por especialistas con experiencia clínica y académica.', icon: Award },
  { title: 'Tecnología avanzada', text: 'Equipos y herramientas digitales para una formación actualizada.', icon: Monitor },
  { title: 'Aprendizaje práctico', text: 'Enfoque en la aplicación real de los conocimientos.', icon: GraduationCap },
  { title: 'Para todos los niveles', text: 'Dirigido a estudiantes, odontólogos y profesionales interesados en especializarse.', icon: Users },
  { title: 'Actualización constante', text: 'Contenido actualizado según las últimas tendencias y avances en odontología.', icon: Clock3 },
];

function Logo() {
  return (
    <a href="#inicio" className="logo-link" aria-label="ADO Academia Digital">
      <Image src="/assets/logo-ado.jpg" alt="ADO Academia Digital" width={170} height={88} priority />
    </a>
  );
}

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, light = false, centered = false }) {
  return (
    <div className={`section-title ${light ? 'light' : ''} ${centered ? 'centered' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="ado-page">
      <div className="moving-texture" />
      <div className="gold-lines gold-lines-left" />
      <div className="gold-lines gold-lines-right" />

      <header className="topbar">
        <div className="container topbar-inner">
          <Logo />
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </nav>
          <a className="cta-header" href={wa('Hola, deseo solicitar información sobre ADO Academia Digital.')} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> Solicitar información
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menú">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section id="inicio" className="hero-wrap">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="mini-kicker">Academia especializada</span>
            <h1>
              FORMACIÓN <br />
              AVANZADA EN <br />
              <em>ODONTOLOGÍA</em> <br />
              <em>DIGITAL</em>
            </h1>
            <p>
              Especialízate en Ortodoncia, Implantes, Endodoncia y Estética Dental con una metodología práctica,
              moderna y orientada a resultados clínicos reales.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={wa('Hola, quiero recibir información sobre ADO Academia Digital por WhatsApp.')} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Hablar por WhatsApp
              </a>
              <a className="btn btn-outline" href="#cursos">Ver cursos</a>
            </div>
            <div className="hero-highlights">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="highlight-item">
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={0.1}>
            <div className="hero-photo-box">
              <Image src="/assets/hero-main.png" alt="Odontología digital y tecnología moderna" fill className="cover" priority />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <div className="container about-grid">
          <Reveal className="about-image">
            <div className="rounded-photo">
              <Image src="/assets/about-main.png" alt="Sesión práctica en academia dental" fill className="cover" />
            </div>
          </Reveal>
          <Reveal className="about-copy" delay={0.06}>
            <span className="small-label">SOBRE ADO</span>
            <h2>Academia Digital</h2>
            <p>
              En ADO Academia Digital formamos profesionales y futuros especialistas de la odontología mediante programas actualizados,
              prácticos y enfocados en la aplicación clínica real.
            </p>
            <p>
              Integramos conocimientos avanzados, tecnología digital y metodologías modernas para que cada alumno desarrolle habilidades
              precisas, seguras y eficaces en el área odontológica.
            </p>
          </Reveal>
        </div>

        <div className="container mission-grid">
          <Reveal className="mission-card" delay={0.08}>
            <div className="mission-title"><Target size={20} /><h3>MISIÓN</h3></div>
            <p>
              Formar y capacitar a profesionales de la odontología con conocimientos avanzados en tecnología digital,
              ofreciendo cursos especializados en Ortodoncia, Implantes, Endodoncia y Estética Dental.
            </p>
            <p>
              A través de metodologías prácticas, actualizadas y respaldadas por la innovación, buscamos desarrollar habilidades precisas,
              seguras y eficaces que permitan brindar tratamientos de excelencia.
            </p>
          </Reveal>
          <Reveal className="mission-card" delay={0.12}>
            <div className="mission-title"><Sparkles size={20} /><h3>VISIÓN</h3></div>
            <p>
              Ser la academia de referencia líder en odontología digital en la región, reconocida por la calidad de su enseñanza,
              la actualización constante y la integración de las últimas tecnologías.
            </p>
            <p>
              Aspiramos a formar profesionales competentes, innovadores y comprometidos, contribuyendo al progreso de la odontología moderna.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="cursos" className="courses-section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="CURSOS ESPECIALIZADOS" title="Áreas de formación" centered /></Reveal>
          <div className="course-grid">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Reveal key={course.title} className="course-card" delay={index * 0.05}>
                  <div className="course-image"><Image src={course.image} alt={course.title} fill className="cover" /></div>
                  <div className="course-icon"><Icon size={20} /></div>
                  <div className="course-body">
                    <h3>{course.title}</h3>
                    <p>{course.text}</p>
                    <a href={wa(`Hola, deseo información sobre ${course.title} en ADO Academia Digital.`)} target="_blank" rel="noreferrer" className="course-link">Solicitar información</a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodologia" className="method-section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="NUESTRA METODOLOGÍA" title="Aprendizaje que transforma" centered light /></Reveal>
          <div className="method-grid">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="method-item" delay={index * 0.04}>
                  <Icon size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proximos" className="upcoming-section">
        <div className="container upcoming-grid">
          <Reveal className="upcoming-left">
            <span className="small-label gold">PRÓXIMOS CURSOS</span>
            <h2>Fechas próximas</h2>
            <div className="table-head"><span>Curso</span><span>Fecha</span><span>Modalidad</span><span>Estado</span></div>
            {schedule.map((row) => (
              <div className="table-row" key={row.name}>
                <span>{row.name}</span>
                <span>{row.date}</span>
                <span>{row.mode}</span>
                <span className={row.status.includes('abiertas') ? 'status-open' : 'status-limited'}>{row.status}</span>
              </div>
            ))}
            <a className="btn btn-gold" href={wa('Hola, deseo solicitar información sobre próximas fechas y modalidades de cursos de ADO Academia Digital.')} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Solicitar información por WhatsApp
            </a>
          </Reveal>
          <Reveal className="upcoming-right" delay={0.06}>
            <span className="small-label gold">¿POR QUÉ ELEGIR ADO?</span>
            <h2>Tu crecimiento es nuestra prioridad</h2>
            <div className="benefit-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="benefit-item" key={item.title}>
                    <Icon size={20} />
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

      <section id="contacto" className="contact-section">
        <div className="container contact-grid">
          <Reveal>
            <span className="small-label gold">SOLICITA INFORMACIÓN</span>
            <h2>Déjanos tus datos</h2>
            <p>
              Completa el formulario y nuestro equipo se comunicará contigo para brindarte toda la información sobre nuestros cursos,
              fechas, modalidad e inscripción.
            </p>
            <p className="contact-note">Formulario demostrativo: por ahora no envía datos. Los botones dirigen a WhatsApp.</p>
          </Reveal>
          <Reveal className="contact-form" delay={0.06}>
            <form>
              <div className="form-row three">
                <label>Nombre completo *<input type="text" placeholder="Tu nombre completo" /></label>
                <label>WhatsApp *<input type="text" placeholder="Tu número de WhatsApp" /></label>
                <label>Correo electrónico *<input type="email" placeholder="tu@email.com" /></label>
              </div>
              <div className="form-row two">
                <label>Curso de interés *
                  <select><option>Selecciona un curso</option>{courses.map((course) => <option key={course.title}>{course.title}</option>)}</select>
                </label>
                <label>Mensaje (opcional)<textarea rows="4" placeholder="Escribe tu mensaje" /></label>
              </div>
              <a href={wa('Hola, deseo enviar mi solicitud de información para ADO Academia Digital.')} target="_blank" rel="noreferrer" className="btn btn-gold form-btn"><ArrowRight size={16} /> Enviar solicitud</a>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>Formación avanzada en odontología digital para impulsar tu futuro profesional.</p>
            <div className="socials">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
          <div>
            <h3>ENLACES RÁPIDOS</h3>
            <div className="footer-links">{navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
          </div>
          <div>
            <h3>CONTACTO</h3>
            <div className="footer-contact">
              <p><MessageCircle size={16} /> +00 000 000 000</p>
              <p><Mail size={16} /> contacto@adoacademiadigital.com</p>
              <p><MapPin size={16} /> Ciudad, País</p>
              <p><Clock3 size={16} /> Lunes a sábado: 9:00 a. m. - 6:00 p. m.</p>
            </div>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 ADO Academia Digital. Todos los derechos reservados.</span><span>Política de privacidad | Términos y condiciones</span></div>
      </footer>

      <a className="floating-wa" href={wa('Hola, deseo recibir información de ADO Academia Digital.')} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={28} />
      </a>
    </main>
  );
}
