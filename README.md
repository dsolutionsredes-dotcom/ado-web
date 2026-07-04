# ADO Academia Digital - Next.js (versión actualizada)

Versión renovada de la web informacional de **ADO Academia Digital**, con:

- diseño más claro, premium y profesional
- inspiración estructural en la web de referencia indicada por el cliente
- colores basados en el logo
- imágenes reales/generadas para los cursos
- formulario visual (por ahora no envía datos)
- botones principales dirigidos a WhatsApp
- Dockerfile listo para EasyPanel

## Cambiar WhatsApp

Editar en `app/page.jsx`:

```js
const whatsappNumber = '000000000';
```

Reemplazar por el número real en formato internacional sin `+`.

Ejemplo:

```js
const whatsappNumber = '51999999999';
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy en EasyPanel

1. Subir el proyecto a GitHub.
2. En EasyPanel conectar el repositorio.
3. Usar tipo de despliegue: **Dockerfile**.
4. Implementar.

## Notas

- Los textos de fechas, datos de contacto, estadísticas y algunos contenidos son temporales.
- Las imágenes de cursos ya están integradas dentro de `public/assets`.
