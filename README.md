# ADO Academia Digital - v3

Versión más cercana al mockup solicitado para una landing académica de cursos.

## Características
- diseño premium alineado al mockup enviado
- enfoque visual de academia / escuela de cursos
- secciones informativas para captación de alumnos
- imágenes ya integradas en `public/assets`
- botones dirigidos a WhatsApp
- formulario visual sin backend
- Dockerfile listo para EasyPanel

## Cambiar número de WhatsApp
Editar en `app/page.jsx`:

```js
const whatsappNumber = '000000000';
```

## Desarrollo local
```bash
npm install
npm run dev
```

## Deploy
Subir el proyecto a GitHub y desplegar con Dockerfile en EasyPanel.
