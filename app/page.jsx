'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  MonitorSmartphone,
  Phone,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Workflow,
  X,
  Youtube,
  Facebook,
} from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = '000000000';
const whatsappBase = `https://wa.me/${whatsappNumber}`;
const buildWhatsAppLink = (message) => `${whatsappBase}?text=${encodeURIComponent(message)}`;

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Programas', href: '#programas' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Próximos cursos', href: '#proximos' },
  { label: 'Contacto', href: '#contacto' },
];

const heroHighlights = [
  { icon: GraduationCap, label: 'Formación especializada' },
  { icon: MonitorSmartphone, label: 'Tecnología digital' },
  { icon: Users, label: 'Docentes expertos' },
  { icon: Award, label: 'Certificación' },
];

const courses = [
  {
    title: 'Ortodoncia Digital',
    image: '/assets/hero-ortodoncia.png',
    icon: Workflow,
    text: 'Aprende planificación diagnóstica, alineadores, escaneo y herramientas digitales orientadas a resultados clínicos más precisos.',
  },
  {
    title: 'Implantes Dentales',
    image: '/assets/implantes.png',
    icon: Stethoscope,
    text: 'Formación práctica en implantología oral, planificación de casos, rehabilitación y criterios clínicos actuales.',
  },
  {
    title: 'Endodoncia',
    image: '/assets/endodoncia.png',
    icon: Microscope,
    text: 'Capacitación con enfoque clínico, magnificación y protocolos modernos para un tratamiento endodóntico seguro y eficaz.',
  },
  {
    title: 'Estética Dental',
    image: '/assets/estetica.png',
    icon: Sparkles,
    text: 'Diseño de sonrisa, armonía dental y criterios estéticos con una experiencia formativa moderna y profesional.',
  },
];

const methodology = [
  { title: 'Teoría aplicada', text: 'Clases estructuradas con un lenguaje claro y enfoque clínico real.', icon: BookOpen },
  { title: 'Prácticas guiadas', text: 'Aprendizaje paso a paso con acompañamiento docente.', icon: ShieldCheck },
  { title: 'Tecnología digital', text: 'Escaneo, diagnóstico y recursos actuales de la odontología moderna.', icon: ScanFace },
  { title: 'Casos clínicos', text: 'Resolución de casos y análisis aplicado para fortalecer competencias.', icon: Target },
  { title: 'Certificación', text: 'Constancia de participación y respaldo académico.', icon: BadgeCheck },
];

const values = [
  { title: 'Docencia actualizada', text: 'Contenidos alineados con tendencias, innovación y práctica clínica contemporánea.', icon: GraduationCap },
  { title: 'Enfoque profesional', text: 'Programas pensados para odontólogos, estudiantes y profesionales que buscan especializarse.', icon: Users },
  { title: 'Experiencia de aprendizaje', text: 'Ambiente formativo elegante, cercano y orientado a resultados reales.', icon: Sparkles },
];

const upcoming = [
  { title: 'Ortodoncia Digital', date: '15 – 17 Jun 2026', mode: 'Presencial', seats: 'Cupos limitados' },
  { title: 'Implantes Dentales', date: '20 – 22 Jul 2026', mode: 'Presencial', seats: 'Inscripciones abiertas' },
  { title: 'Endodoncia', date: '10 – 12 Ago 2026', mode: 'Presencial', seats: 'Cupos limitados' },
  { title: 'Estética Dental', date: '14 – 16 Sep 2026', mode: 'Presencial', seats: 'Inscripciones abiertas' },
];

const stats = [
  { value: '+700', label: 'Alumnos formados*' },
  { value: '4', label: 'Áreas principales' },
  { value: '100%', label: 'Enfoque práctico' },
  { value: '+20', label: 'Módulos proyectados*' },
];

function Logo() {
  return (
    <a href="#inicio" className="logo" aria-label="ADO Academia Digital">
      <Image src="/assets/logo-ado.jpg" alt="ADO Academia Digital" width={220} height={120} priority />
    </a>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <div className="page-grid" />

      <header className="site-header">
        <div className="container header-inner">
          <Logo />

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href={buildWhatsAppLink('Hola, deseo solicitar información sobre ADO Academia Digital.')} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Solicitar información
          </a>

          <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section id="inicio" className="hero-section section-space">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">Academia especializada en odontología digital</span>
            <h1>
              Formación avanzada con una experiencia <span>más clara, elegante y profesional</span>
            </h1>
            <p>
              En ADO Academia Digital formamos profesionales de la odontología con programas especializados en Ortodoncia,
              Implantes, Endodoncia y Estética Dental, integrando práctica, actualización y tecnología aplicada.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={buildWhatsAppLink('Hola, quiero hablar por WhatsApp para recibir información de los cursos de ADO Academia Digital.')} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Hablar por WhatsApp
              </a>
              <a className="btn btn-secondary" href="#programas">
                Ver programas <ArrowRight size={18} />
              </a>
            </div>

            <div className="highlight-row">
              {heroHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="highlight-pill">
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="hero-media" delay={0.1}>
            <div className="hero-image-card">
              <Image src="/assets/hero-ortodoncia.png" alt="Ortodoncia digital en clínica moderna" fill className="cover-image" priority />
              <div className="hero-badge top-badge">
                <span>Escaneo y planificación digital</span>
              </div>
              <div className="hero-floating-card">
                <div>
                  <strong>Experiencia premium</strong>
                  <p>Ambiente formativo moderno, luminoso y enfocado en la práctica clínica.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space intro-band">
        <div className="container intro-grid">
          <Reveal>
            <div className="card card-soft intro-card">
              <span className="eyebrow">Nuestra propuesta</span>
              <h3>Una academia inspirada en modelos educativos de referencia</h3>
              <p>
                La estructura visual y la claridad de navegación se han replanteado para ofrecer una experiencia similar a la web de referencia,
                pero con un acabado más premium, más limpio, mejor jerarquía visual y una identidad propia alineada al logo de ADO.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card card-accent objective-card">
              <div className="objective-icon"><CheckCircle2 size={24} /></div>
              <div>
                <h3>Objetivo formativo</h3>
                <p>Desarrollar profesionales competentes, seguros e innovadores en odontología digital.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="nosotros" className="section-space">
        <div className="container about-grid-v2">
          <Reveal className="about-main">
            <SectionHeading
              eyebrow="Sobre ADO"
              title="Academia Digital"
              text="Formamos profesionales y futuros especialistas de la odontología mediante programas actualizados, metodología práctica y una experiencia educativa enfocada en la aplicación clínica real."
            />
            <div className="about-text-grid">
              <div className="card card-soft text-card">
                <h3>Misión</h3>
                <p>
                  Formar y capacitar a profesionales de la odontología con conocimientos avanzados en tecnología digital,
                  ofreciendo cursos especializados en Ortodoncia, Implantes, Endodoncia y Estética Dental.
                </p>
              </div>
              <div className="card card-soft text-card">
                <h3>Visión</h3>
                <p>
                  Ser la academia de referencia líder en odontología digital en la región, reconocida por la calidad de su enseñanza,
                  la actualización constante y la integración de las últimas tecnologías.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="about-gallery" delay={0.1}>
            <div className="gallery-card large-card">
              <Image src="/assets/estetica.png" alt="Consulta de estética dental" fill className="cover-image" />
            </div>
            <div className="gallery-stack">
              <div className="gallery-card small-card">
                <Image src="/assets/implantes.png" alt="Clase de implantes dentales" fill className="cover-image" />
              </div>
              <div className="gallery-card small-card">
                <Image src="/assets/endodoncia.png" alt="Clase de endodoncia" fill className="cover-image" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="programas" className="section-space programs-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Programas destacados"
              title="Áreas de formación"
              text="Se incorporaron imágenes más reales y profesionales para mostrar visualmente cada curso, tal como solicitó el cliente."
              centered
            />
          </Reveal>

          <div className="program-grid">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Reveal className="program-card" key={course.title} delay={index * 0.05}>
                  <div className="program-media">
                    <Image src={course.image} alt={course.title} fill className="cover-image" />
                  </div>
                  <div className="program-body">
                    <div className="program-icon"><Icon size={22} /></div>
                    <h3>{course.title}</h3>
                    <p>{course.text}</p>
                    <a
                      href={buildWhatsAppLink(`Hola, deseo recibir información sobre el programa de ${course.title} en ADO Academia Digital.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mini-link"
                    >
                      Solicitar información <ArrowRight size={16} />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodologia" className="section-space methodology-section">
        <div className="container methodology-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Metodología"
              title="Aprendizaje que combina práctica, criterio y tecnología"
              text="La experiencia visual se replanteó hacia un entorno más claro y sofisticado, conservando elegancia, dinamismo y el carácter profesional del sector salud."
            />
          </Reveal>

          <div className="methodology-grid">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="method-card" delay={index * 0.06}>
                  <div className="method-icon"><Icon size={20} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space stats-section">
        <div className="container stats-layout">
          <Reveal className="stats-copy">
            <SectionHeading
              eyebrow="Trayectoria y confianza"
              title="Una web preparada para crecer"
              text="Se han dejado datos temporales y estructura escalable para luego reemplazar por cifras, docentes, sedes, calendario real y detalles oficiales de la academia."
            />
            <div className="value-list">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div className="value-item" key={value.title}>
                    <Icon size={18} />
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="stats-grid" delay={0.08}>
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="proximos" className="section-space schedule-section">
        <div className="container schedule-grid">
          <Reveal className="schedule-panel light-panel">
            <SectionHeading eyebrow="Próximos cursos" title="Fechas proyectadas" text="Estos datos son temporales y están listos para sustituirse por la programación oficial." />

            <div className="schedule-list">
              {upcoming.map((item) => (
                <div className="schedule-item" key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p><CalendarDays size={15} /> {item.date}</p>
                  </div>
                  <div className="schedule-meta">
                    <span>{item.mode}</span>
                    <strong>{item.seats}</strong>
                  </div>
                </div>
              ))}
            </div>

            <a className="btn btn-primary" href={buildWhatsAppLink('Hola, deseo recibir información sobre fechas, modalidad e inscripción de los próximos cursos de ADO Academia Digital.')} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Solicitar información por WhatsApp
            </a>
          </Reveal>

          <Reveal className="schedule-panel dark-panel" delay={0.08}>
            <SectionHeading eyebrow="¿Por qué elegir ADO?" title="Tu crecimiento profesional es la prioridad" />
            <div className="benefit-list">
              <div className="benefit-item"><Award size={18} /><span>Formación actualizada y alineada a la odontología moderna.</span></div>
              <div className="benefit-item"><MonitorSmartphone size={18} /><span>Recursos digitales y soporte visual profesional para cada programa.</span></div>
              <div className="benefit-item"><Clock3 size={18} /><span>Diseño preparado para futuras ampliaciones: docentes, sedes y más cursos.</span></div>
              <div className="benefit-item"><MapPin size={18} /><span>Estructura informacional clara para captar alumnos y consultas.</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="section-space contact-section">
        <div className="container contact-layout">
          <Reveal className="contact-copy">
            <SectionHeading
              eyebrow="Contacto"
              title="Déjanos tus datos"
              text="Formulario visual por ahora. No envía datos todavía; los botones dirigen a WhatsApp, tal como se solicitó para esta primera versión."
            />

            <div className="contact-card-grid">
              <div className="contact-mini-card">
                <Phone size={18} />
                <div>
                  <strong>WhatsApp</strong>
                  <p>+00 000 000 000</p>
                </div>
              </div>
              <div className="contact-mini-card">
                <Mail size={18} />
                <div>
                  <strong>Email</strong>
                  <p>contacto@adoacademiadigital.com</p>
                </div>
              </div>
              <div className="contact-mini-card">
                <MapPin size={18} />
                <div>
                  <strong>Ubicación</strong>
                  <p>Ciudad, País</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-card" delay={0.08}>
            <form>
              <div className="field-grid two">
                <label>
                  Nombre completo *
                  <input type="text" placeholder="Tu nombre completo" />
                </label>
                <label>
                  WhatsApp *
                  <input type="text" placeholder="Tu número de WhatsApp" />
                </label>
              </div>

              <div className="field-grid two">
                <label>
                  Correo electrónico *
                  <input type="email" placeholder="tu@email.com" />
                </label>
                <label>
                  Curso de interés *
                  <select>
                    <option>Selecciona un curso</option>
                    {courses.map((course) => (
                      <option key={course.title}>{course.title}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Mensaje opcional
                <textarea rows="5" placeholder="Escribe tu mensaje" />
              </label>

              <a className="btn btn-primary submit-btn" href={buildWhatsAppLink('Hola, deseo enviar mi solicitud de información para ADO Academia Digital.')} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Enviar solicitud
              </a>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <Logo />
            <p className="footer-text">Formación avanzada en odontología digital para impulsar tu desarrollo profesional.</p>
            <div className="social-row">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h3>Enlaces rápidos</h3>
            <div className="footer-links">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>{item.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h3>Contacto</h3>
            <div className="footer-contact">
              <p><Phone size={16} /> +00 000 000 000</p>
              <p><Mail size={16} /> contacto@adoacademiadigital.com</p>
              <p><MapPin size={16} /> Ciudad, País</p>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 ADO Academia Digital. Versión demo con datos temporales.</span>
          <span>Política de privacidad | Términos y condiciones</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={buildWhatsAppLink('Hola, deseo recibir información de ADO Academia Digital.')} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
        <MessageCircle size={28} />
      </a>
    </main>
  );
}
