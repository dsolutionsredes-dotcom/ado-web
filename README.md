# ADO Academia Digital - v4

Versión v4 de la landing informativa para ADO Academia Digital.

## Incluye

- Diseño más claro, médico, educativo y moderno.
- Secciones con tonos diferentes para mejor contraste.
- Logo integrado como elemento CSS para evitar la caja blanca del logo original.
- Fondo animado sutil con formas dentales abstractas.
- Imágenes integradas en `public/assets`.
- Responsive real para móvil.
- Formulario visual sin envío real.
- Botones conectados a WhatsApp.
- Dockerfile listo para EasyPanel.

## Cambiar WhatsApp

En `app/page.jsx`, cambiar:

```js
const whatsappNumber = '000000000';
```

por el número real en formato internacional, sin `+`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue

Subir a GitHub y desplegar en EasyPanel usando Dockerfile.
