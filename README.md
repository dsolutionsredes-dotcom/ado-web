# ADO Academia Digital - v5

Versión corregida usando el mockup aprobado como referencia principal.

## Qué incluye

- Logo original convertido a PNG transparente para evitar la caja blanca.
- Imágenes del mockup recortadas como assets separados:
  - hero-main.jpg
  - about-main.jpg
  - course-ortodoncia.jpg
  - course-implantes.jpg
  - course-endodoncia.jpg
  - course-estetica.jpg
- Diseño claro, médico, educativo y moderno.
- Secciones con contraste suave.
- Header no sticky para evitar que aparezca encima de las secciones al hacer scroll.
- Responsive real para móvil.
- Fondo dental sutil animado.
- Botones dirigidos a WhatsApp.
- Formulario visual, sin backend.
- Dockerfile listo para EasyPanel.

## Cambiar WhatsApp

Editar en `app/page.jsx`:

```js
const whatsappNumber = '000000000';
```

Usar formato internacional sin `+`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

Subir el contenido del proyecto al repositorio GitHub y desplegar con Dockerfile en EasyPanel.
