# ADO Academia Digital - Next.js

Landing page informacional para ADO Academia Digital.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir: http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t ado-academia-digital .
docker run -p 3000:3000 ado-academia-digital
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Initial ADO Academia Digital landing"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ado-academia-digital.git
git push -u origin main
```

## EasyPanel

1. Crear un repositorio en GitHub.
2. Subir este proyecto al repositorio.
3. En EasyPanel crear una nueva App desde GitHub.
4. Seleccionar el repositorio.
5. Tipo de despliegue: Dockerfile.
6. Puerto interno: 3000.
7. Build command: no hace falta si usa Dockerfile.
8. Start command: no hace falta si usa Dockerfile.

## Cambiar WhatsApp

Editar en `app/page.jsx`:

```js
const whatsappNumber = '000000000';
```

Poner el número real en formato internacional sin `+`, por ejemplo:

```js
const whatsappNumber = '51999999999';
```

## Formulario

Por ahora es demostrativo y no envía datos. El botón "Enviar solicitud" abre WhatsApp.
