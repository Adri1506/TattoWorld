# TattoWorld - Tatuajes a Domicilio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://tatto-world.vercel.app/)

Sitio web estático para servicio de tatuajes a domicilio en Santiago, Chile.

🌐 **Sitio en vivo:** [tatto-world.vercel.app](https://tatto-world.vercel.app/)

## Descripción

TattoWorld es una página web estática que ofrece información sobre servicios de tatuaje profesional a domicilio. El sitio incluye galería de trabajos, información de servicios, precios y formulario de contacto.

## Características

- **Diseño Responsive**: Mobile-first, funciona en todos los dispositivos
- **Tema Oscuro**: Diseño elegante con acentos dorados
- **Galería Interactiva**: Filtros por estilo y lightbox para imágenes
- **Formulario de Contacto**: Integrado con Formspree
- **WhatsApp Directo**: Botón flotante para contacto rápido
- **SEO Optimizado**: Meta tags, Open Graph y Schema.org
- **Animaciones**: Efectos suaves con AOS (Animate On Scroll)

## Tecnologías

- HTML5
- Tailwind CSS (local)
- JavaScript ES2024
- Lucide Icons (local)
- AOS (Animate On Scroll)
- **Vercel** (hosting y despliegue automático)

## Estructura del Proyecto

```
outputs/development/
├── index.html              # Página principal
├── pages/
│   ├── servicios.html      # Página de servicios
│   ├── galeria.html        # Galería de trabajos
│   └── contacto.html       # Formulario de contacto
├── assets/
│   ├── css/
│   │   ├── styles.css      # Estilos globales
│   │   └── tailwind-config.js
│   ├── js/
│   │   ├── main.js         # Funcionalidades principales
│   │   ├── lightbox.js     # Componente lightbox
│   │   ├── gallery-filter.js # Filtros de galería
│   │   ├── contact-form.js # Formulario de contacto
│   │   └── whatsapp.js     # Integración WhatsApp
│   ├── components/
│   │   ├── navbar.html
│   │   ├── footer.html
│   │   ├── whatsapp-button.html
│   │   ├── page-header.html
│   │   └── cta-section.html
│   └── img/
│       ├── gallery/        # Imágenes de galería
│       └── icons/          # Favicon e iconos
└── README.md
```

## Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/tattoworld.git
   ```

2. Abrir `index.html` en un navegador o usar un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve
   ```

3. Visitar `http://localhost:8000`

## Mantenimiento

### Actualizar Contenido

- **Textos**: Editar directamente en los archivos HTML
- **Imágenes**: Reemplazar archivos en `assets/img/gallery/`
- **Precios**: Modificar en `pages/servicios.html`
- **Contacto**: Actualizar número de WhatsApp en los archivos JS

### Agregar Nuevas Imágenes

1. Optimizar la imagen con [Squoosh](https://squoosh.app/)
2. Guardar en `assets/img/gallery/` formato WebP
3. Actualizar `assets/js/gallery-data.js`

### Cambiar Colores

Editar las variables CSS en `assets/css/styles.css`:
```css
:root {
  --color-accent: #c9a227;  /* Color dorado principal */
  --color-background: #0d0d0d;  /* Fondo oscuro */
}
```

## Despliegue

El sitio está desplegado en **Vercel**:
- 🌐 URL: https://tatto-world.vercel.app/
- 📦 Repositorio: https://github.com/Adri1506/TattoWorld

### Deploy Automático
Vercel despliega automáticamente cada push a la rama `master`.

### Despliegue Manual
```bash
npm i -g vercel
vercel
```

## Rendimiento

- Imágenes optimizadas en formato WebP
- Lazy loading implementado
- CSS crítico inline
- JavaScript diferido (defer)

## Accesibilidad

- Navegación por teclado
- Etiquetas ARIA
- Contraste adecuado (WCAG 2.1)
- Skip to main content

## Licencia

© 2026 Todos los derechos reservados.
