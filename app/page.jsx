'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Box,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Facebook,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Youtube,
} from 'lucide-react';

const whatsappNumber = '000000000';
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Próximos cursos', href: '#proximos' },
  { label: 'Contacto', href: '#contacto' },
];

const heroBadges = [
  { title: 'Formación especializada', icon: GraduationCap },
  { title: 'Tecnología de vanguardia', icon: Monitor },
  { title: 'Docentes expertos', icon: Users },
  { title: 'Certificación reconocida', icon: Award },
];

const courses = [
  {
    title: 'Ortodoncia Digital',
    image: '/assets/course-ortodoncia.jpg',
    icon: Workflow,
    text: 'Aprende planificación, diagnóstico y aplicación de técnicas modernas para tratamientos más precisos y eficientes.',
  },
  {
    title: 'Implantes Dentales',
    image: '/assets/course-implantes.jpg',
    icon: ShieldCheck,
    text: 'Formación integral en implantología y proyectos sobre implantes con protocolos de planificación digital avanzada.',
  },
  {
    title: 'Endodoncia',
    image: '/assets/course-endodoncia.jpg',
    icon: ShieldCheck,
    text: 'Capacitación práctica para mejorar diagnóstico, manejo clínico y tratamiento endodóntico con criterios actuales.',
  },
  {
    title: 'Estética Dental',
    image: '/assets/course-estetica.jpg',
    icon: Sparkles,
    text: 'Desarrolla habilidades en rehabilitación estética, diseño de sonrisa y procedimientos orientados a resultados naturales.',
  },
];

const methodology = [
  { title: 'Teoría aplicada', text: 'Clases claras y estructuradas con enfoque en la práctica clínica real.', icon: Box },
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
  { title: 'Tecnología avanzada', text: 'Equipos y herramientas digitales para una formación actualizada.', icon: Monitor },
  { title: 'Aprendizaje práctico', text: 'Enfoque en la aplicación real de los conocimientos.', icon: Users },
  { title: 'Para todos los niveles', text: 'Dirigido a estudiantes, odontólogos y profesionales interesados en especializarse.', icon: GraduationCap },
  { title: 'Actualización constante', text: 'Contenido actualizado según las últimas tendencias y avances en odontología.', icon: Clock3 },
];

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="ADO Academia Digital">
      <Image src="/assets/ado-logo-transparent.png" alt="ADO Academia Digital" width={220} height={116} priority />
    </a>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="dental-texture" />
      <div className="tooth-watermark tooth-one" />
      <div className="tooth-watermark tooth-two" />

      <section id="inicio" className="hero-section">
        <header className="header">
          <div className="container header-grid">
            <Logo />
            <nav className={`nav ${menuOpen ? 'is-open' : ''}`}>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              ))}
            </nav>
            <a className="header-button" href={whatsappLink('Hola, deseo solicitar información sobre ADO Academia Digital.')} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Solicitar información
            </a>
            <button className="mobile-menu" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">Aprende. Practica. Transforma.</span>
            <h1>Formación avanzada en odontología digital <strong>para el futuro profesional.</strong></h1>
            <p>Programas especializados, tecnología de vanguardia y metodologías prácticas para llevar tu carrera al siguiente nivel.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink('Hola, quiero recibir información sobre los cursos de ADO Academia Digital.')} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Solicitar información
              </a>
              <a className="btn btn-outline" href="#cursos">Ver cursos</a>
            </div>
            <div className="hero-badges">
              {heroBadges.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="hero-badge">
                    <Icon size={22} />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal className="hero-image-wrap" delay={0.1}>
            <div className="hero-image-card">
              <Image src="/assets/hero-main.jpg" alt="Tecnología dental digital" fill className="cover-img" priority />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="nosotros" className="about-section section-contrast">
        <div className="container about-grid">
          <Reveal className="about-image-card">
            <Image src="/assets/about-main.jpg" alt="Sesión práctica de odontología" fill className="cover-img" />
          </Reveal>
          <Reveal className="about-copy" delay={0.06}>
            <span className="eyebrow">Sobre ADO</span>
            <h2>Academia Digital</h2>
            <p>En ADO Academia Digital formamos profesionales y futuros especialistas de la odontología mediante programas actualizados, prácticos y enfocados en la aplicación clínica real.</p>
            <p>Integramos conocimiento avanzado, tecnología digital y metodologías modernas para que cada alumno desarrolle habilidades precisas, seguras y eficaces en el área odontológica.</p>
          </Reveal>
          <Reveal className="mission-stack" delay={0.1}>
            <div className="info-card">
              <Target size={24} />
              <div>
                <h3>Misión</h3>
                <p>Formar y capacitar a profesionales de la odontología con conocimientos avanzados en tecnología digital, ofreciendo cursos especializados.</p>
              </div>
            </div>
            <div className="info-card">
              <Sparkles size={24} />
              <div>
                <h3>Visión</h3>
                <p>Ser la academia de referencia líder en odontología digital, reconocida por la calidad de su enseñanza y actualización constante.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="cursos" className="courses-section">
        <div className="container">
          <Reveal className="section-title centered">
            <span className="divider-label">Áreas de formación</span>
          </Reveal>
          <div className="courses-grid">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Reveal key={course.title} className="course-card" delay={index * 0.05}>
                  <div className="course-image">
                    <Image src={course.image} alt={course.title} fill className="cover-img" />
                  </div>
                  <div className="course-icon"><Icon size={22} /></div>
                  <div className="course-body">
                    <h3>{course.title}</h3>
                    <p>{course.text}</p>
                    <a href={whatsappLink(`Hola, deseo recibir información sobre ${course.title}.`)} target="_blank" rel="noreferrer">Ver curso <span>→</span></a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodologia" className="method-section">
        <div className="container">
          <Reveal className="method-panel">
            <span>Nuestra metodología</span>
            <div className="method-grid">
              {methodology.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="method-item" key={item.title}>
                    <Icon size={30} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="proximos" className="next-section">
        <div className="container next-grid">
          <Reveal className="schedule-card">
            <span className="eyebrow">Próximas fechas</span>
            <div className="schedule-table">
              <div className="schedule-head"><span>Curso</span><span>Fecha</span><span>Modalidad</span><span>Estado</span></div>
              {schedule.map((row) => (
                <div className="schedule-row" key={row.course}>
                  <span>{row.course}</span>
                  <span>{row.date}</span>
                  <span>{row.mode}</span>
                  <strong className={row.status.includes('abiertas') ? 'open' : 'limited'}>{row.status}</strong>
                </div>
              ))}
            </div>
            <a className="btn btn-whatsapp" href={whatsappLink('Hola, deseo información sobre las próximas fechas de cursos ADO.')} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Solicitar información por WhatsApp
            </a>
          </Reveal>

          <Reveal className="benefits-card" delay={0.08}>
            <span className="eyebrow">¿Por qué elegir ADO?</span>
            <h2>Tu crecimiento es nuestra prioridad.</h2>
            <div className="benefits-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="benefit-item">
                    <Icon size={22} />
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
          <Reveal className="contact-copy">
            <span className="eyebrow">Solicita información</span>
            <h2>Déjanos tus datos</h2>
            <p>Completa el formulario y nuestro equipo se comunicará contigo para brindarte información sobre nuestros cursos, fechas, modalidad e inscripción.</p>
            <p className="note">Formulario demostrativo: por ahora no envía datos. Los botones dirigen a WhatsApp.</p>
          </Reveal>
          <Reveal className="form-card" delay={0.06}>
            <form>
              <label>Nombre completo *<input type="text" placeholder="Tu nombre completo" /></label>
              <label>WhatsApp *<input type="text" placeholder="Tu número de WhatsApp" /></label>
              <label>Correo electrónico *<input type="email" placeholder="tucorreo@email.com" /></label>
              <label>Curso de interés *<select><option>Selecciona un curso</option>{courses.map((course) => <option key={course.title}>{course.title}</option>)}</select></label>
              <label className="wide">Mensaje opcional<textarea placeholder="Escribe tu mensaje" rows={3} /></label>
              <a className="submit-button" href={whatsappLink('Hola, deseo enviar mi solicitud de información para ADO Academia Digital.')} target="_blank" rel="noreferrer"><Send size={17} /> Enviar solicitud</a>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>Formación avanzada en odontología digital para impulsar tu futuro profesional.</p>
            <div className="socials"><Instagram size={18} /><Facebook size={18} /><Youtube size={18} /></div>
          </div>
          <div>
            <h3>Enlaces rápidos</h3>
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </div>
          <div>
            <h3>Contacto</h3>
            <p><MessageCircle size={16} /> +00 000 000 000</p>
            <p><Mail size={16} /> contacto@adoacademiadigital.com</p>
            <p><MapPin size={16} /> Ciudad, País</p>
            <p><CalendarDays size={16} /> Lunes a sábado: 9:00 a. m. - 6:00 p. m.</p>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 ADO Academia Digital. Todos los derechos reservados.</span><span>Política de privacidad | Términos y condiciones</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink('Hola, deseo recibir información de ADO Academia Digital.')} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={30} /></a>
    </main>
  );
}
