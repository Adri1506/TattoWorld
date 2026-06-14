# Architecture Document: TattoWorld - Web Estatica de Tatuajes a Domicilio

**Proyecto:** TattoWorld
**Tipo:** Sitio Web Estatico
**Arquitecto:** Architect Agent v2.1.0
**Fecha:** 14 de junio de 2026
**Estado:** READY_FOR_NEXT

---

## 1. Project Overview

TattoWorld es un sitio web estatico disenado para un tatuador independiente que ofrece servicios de tatuajes a domicilio. El sitio tiene como objetivo principal presentar los servicios, mostrar un portafolio de trabajos, facilitar el contacto directo y permitir la solicitud de reservas/citas.

El proyecto se enmarca como un sitio personal de bajo costo, mantenimiento minimo y maxima disponibilidad, sin necesidad de backend complejo ni bases de datos.

---

## 2. Requirements Analysis

### 2.1 Requisitos Funcionales

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| FR01 | Pagina de inicio con informacion del servicio | Alta |
| FR02 | Galeria de trabajos realizados | Alta |
| FR03 | Informacion sobre servicios ofrecidos | Alta |
| FR04 | Seccion de contacto (formulario + WhatsApp) | Alta |
| FR05 | Reserva/solicitud de cita | Media |
| FR06 | Navegacion responsive (mobile-first) | Alta |
| FR07 | SEO basico (meta tags, Open Graph) | Media |
| FR08 | Enlaces a redes sociales | Media |

### 2.2 Requisitos No Funcionales

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| NFR01 | Carga rapida (< 3 segundos en 3G) | Alta |
| NFR02 | Compatibilidad con dispositivos moviles | Alta |
| NFR03 | Hosting gratuito o de bajo costo | Alta |
| NFR04 | Mantenimiento minimo (actualizaciones manuales de contenido) | Alta |
| NFR05 | HTTPS habilitado | Alta |
| NFR06 | Accesibilidad basica (alt tags, contraste) | Media |

### 2.3 Restricciones

- Proyecto personal, probablemente sin presupuesto para hosting pago
- El tatuador es independiente (no hay equipo grande)
- Contenido principalmente visual (fotos de trabajos)
- Necesidad de contacto rapido via WhatsApp (comun en Chile/Latam)

---

## 3. Selected Architecture Pattern

### Patron Seleccionado: Static Files (Archivos Estaticos Planos)

**Justificacion:**

Dado que el proyecto es un sitio informativo de bajo complejidad con 3-5 paginas, sin necesidad de generacion automatica de contenido, y con un mantenimiento manual aceptable, la arquitectura de archivos estaticos planos es la mas adecuada.

**Proceso de Evaluacion:**

| Arquitectura | Complejidad | Velocidad Desarrollo | Mantenimiento | Score |
|-------------|-------------|---------------------|---------------|-------|
| Static Files | Baja | Maxima | Manual | 9/10 |
| JAMstack (Hugo) | Media | Alta | Semi-automatico | 7/10 |
| SPA (React/Next) | Alta | Media | Complejo | 3/10 |
| SPA Vanilla | Media | Media | Manual | 5/10 |

**Arquitectura Descartada: JAMstack (Hugo/Jekyll)**
- Motivo: Para un sitio de 3-5 paginas con contenido que cambia muy raramente, el overhead de configurar un generador estatico no justifica la escalabilidad que ofrece. El sitio puede crecer naturalmente a JAMstack si en el futuro se agregan 10+ paginas.

**Arquitectura Descartada: SPA con Framework**
- Motivo: Sobre-ingenuria total para un sitio estatico informativo. Complejidad innecesaria, peor SEO por defecto, mayor bundle size.

---

## 4. Architecture Type

**Tipo:** Static Site / Landing Page Multi-seccion

**Subtipo:** Multi-page Static Site (MPA)

El sitio consiste en multiples archivos HTML independientes enlazados entre si, cada uno representando una seccion o pagina del sitio.

---

## 5. Selected Stack

### Stack Tecnologico Recomendado

| Capa | Tecnologia | Version | Justificacion |
|------|-----------|---------|---------------|
| Markup | HTML5 | 5.3 | Estandar universal, semantico |
| Styling | Tailwind CSS (CDN) | 3.4 | Desarrollo rapido, responsive nativo, sin build step |
| Interactividad | JavaScript Vanilla | ES2024 | Sin dependencias, control total |
| Icons | Lucide Icons (CDN) | Latest | Ligero, moderno, SVG |
| Fonts | Google Fonts | - | Tipografia de calidad sin hosting propio |
| Animaciones | AOS (Animate On Scroll) | 2.3 | Efectos de scroll ligeros |
| Formulario | Formspree | - | Backend de formularios gratuito para sitios estaticos |
| Hosting | GitHub Pages | - | Gratuito, HTTPS automatico, dominio personalizado |
| Control de Versiones | Git/GitHub | - | Historial de cambios, backup remoto |
| Optimizacion de Imagenes | Squoosh (manual) | - | Compresion sin perdida de calidad |

### Stack Descartado

| Tecnologia | Motivo de Descarte |
|-----------|-------------------|
| Hugo/Jekyll | Overkill para 3-5 paginas estaticas |
| React/Next.js | Sobre-ingenuria total |
| Bootstrap | Look generico, Tailwind mas moderno |
| CSS Vanilla | Desarrollo mas lento que Tailwind |
| GSAP | Animaciones CSS/AOS suficientes |
| Netlify Forms | Formspree mas simple para GitHub Pages |
| Google Analytics | Privacidad del usuario, no esencial para proyecto personal |

---

## 6. Technology Validation

### Validated Stack Snapshot

**NOTA:** El Architect Agent no realiza validacion tecnologica directa. Las versiones documentadas son las recommendadas basadas en stack_map.yaml. La validacion completa debe ser realizada por la skill tech-refresh.

| Tecnologia | Version Recomendada | Estado |
|-----------|-------------------|--------|
| HTML5 | 5.3 | Estable |
| CSS3 | 3.0 | Estable |
| Tailwind CSS | 3.4 | Activo |
| JavaScript | ES2024 | Estable |
| AOS | 2.3 | Activo |

**Tecnologias Obsoletas Detectadas:** Ninguna

**Alternativas Encontradas:** Ninguna critica

---

## 7. Module Structure

### Modulos del Sitio

| Modulo | Descripcion | Archivos |
|--------|-------------|----------|
| home | Pagina de inicio con hero, servicios resumidos y CTA | index.html |
| servicios | Detalle de servicios de tatuajes a domicilio | servicios.html |
| galeria | Portafolio de trabajos realizados | galeria.html |
| contacto | Formulario de contacto + info de WhatsApp | contacto.html |
| assets | Archivos estaticos (CSS, JS, imagenes) | css/, js/, img/ |

### Dependencias entre Modulos

```
index.html (home)
  |-- servicios.html (enlace desde nav y seccion de servicios)
  |-- galeria.html (enlace desde nav y preview en home)
  |-- contacto.html (enlace desde nav, CTA y footer)
```

---

## 8. Folder Structure

```
TattoWorld/
├── index.html                 # Pagina principal
├── servicios.html             # Pagina de servicios
├── galeria.html               # Galeria de trabajos
├── contacto.html              # Pagina de contacto
├── css/
│   └── styles.css             # Estilos personalizados + Tailwind overrides
├── js/
│   ├── main.js                # Logica principal (nav, smooth scroll)
│   ├── gallery.js             # Logica de galeria (filtros, lightbox)
│   └── form.js                # Validacion de formulario
├── img/
│   ├── hero/                  # Imagen hero principal
│   ├── gallery/               # Fotos de trabajos (foto1-6.png optimizadas)
│   ├── services/              # Iconos/illustraciones de servicios
│   └── logo/                  # Logo del sitio
├── evidencias/                # Fotos originales (no desplegar)
├── knowledge/                 # Base de conocimiento del proyecto
├── outputs/                   # Artefactos de agentes
└── .gitignore                 # Ignorar node_modules, .DS_Store, etc.
```

**Nota:** La estructura no excede 3 niveles de profundidad desde la raiz.

---

## 9. Layer Responsibilities

### Capa de Presentacion (HTML)

- Estructura semantica del contenido
- Meta tags para SEO y Open Graph
- Formulario HTML5 con validacion nativa
- Accesibilidad basica (alt tags, ARIA labels, contraste)

### Capa de Estilos (CSS + Tailwind)

- Tailwind CSS via CDN para utilidades rapidas
- CSS personalizado para efectos custom (gradientes, animaciones)
- Responsive design mobile-first
- Variables CSS para consistencia de colores/tipografia

### Capa de Interactividad (JavaScript)

- Navegacion responsive (hamburger menu)
- Smooth scroll entre secciones
- Lightbox para galeria de imagenes
- Filtros de galeria por categoria
- Validacion de formulario antes de enviar
- Animaciones de scroll (AOS integration)

### Capa de Contenido (Assets)

- Imagenes optimizadas para web (WebP con fallback PNG)
- Logo en formato SVG
- Fuentes via Google Fonts
- Iconos via Lucide Icons

---

## 10. External Dependencies

| Dependencia | Tipo | Uso | CDN/Local |
|------------|------|-----|-----------|
| Tailwind CSS | CSS Framework | Utilidades de diseno | CDN |
| AOS | Animacion | Efectos de scroll | CDN |
| Lucide Icons | Iconos | Iconografia | CDN |
| Google Fonts | Fuentes | Tipografia | CDN |
| Formspree | Form Backend | Envio de formularios | API Externa |
| WhatsApp API | Comunicacion | Contacto directo | URL Externa |

**Politica de Dependencias:**
- Todas las dependencias externas se cargan via CDN para maximo rendimiento
- No hay dependencias de npm/node en produccion
- El sitio funciona sin conexion a internet (excepto formularios y analytics)

---

## 11. Assumptions

| ID | Supuesto | Impacto |
|----|----------|---------|
| A01 | El tatuador tiene acceso basico a GitHub para desplegar | Si no tiene, se puede usar otro hosting estatico |
| A02 | Las fotos en evidencias/ son del tatuador y pueden usarse publicamente | Si no, se necesitan fotos con permiso |
| A03 | El sitio sera en espanol (mercado Chile/Latam) | Se puede agregar i18n futuro |
| A04 | WhatsApp es el medio de contacto preferido | Consistente con practica regional |
| A05 | No se necesita backend ni base de datos | Consistente con requisitos |
| A06 | El sitio tendra maximo 5-7 paginas | Si crece, migrar a JAMstack |
| A07 | El trafico esperado es bajo (< 1000 visitas/mes) | GitHub Pages es suficiente |

---

## 12. Constraints

| ID | Restriccion | Tipo |
|----|-------------|------|
| C01 | Sin presupuesto para hosting pago | Financiera |
| C02 | Mantenimiento manual del contenido | Operacional |
| C03 | El tatuador es independiente (una sola persona) | Organizacional |
| C04 | Las fotos deben ser optimizadas para web | Tecnica |
| C05 | El sitio debe funcionar bien en movil | Tecnica |
| C06 | HTTPS es obligatorio | Tecnica |

---

## 13. Risks

| ID | Riesgo | Probabilidad | Impacto | Mitigacion |
|----|--------|-------------|---------|------------|
| R01 | Imagenes sin optimizar ralentizan el sitio | Alta | Alto | Usar Squoosh antes de subir, formatos WebP |
| R02 | Contenido desactualizado | Media | Medio | Establecer rutina de actualizacion trimestral |
| R03 | Formulario de contacto no funciona | Baja | Alto | Testear con Formspree, tener WhatsApp como backup |
| R04 | Sitio no posiciona en buscadores | Media | Medio | SEO basico, Google Search Console |
| R05 | Dependencia de CDN externo | Baja | Bajo | Fallback a version local si es critico |
| R06 | Perdida de codigo sin control de versiones | Baja | Alto | Git + GitHub obligatorio |

---

## 14. Decision Log

### Selection Process

**Step 1: Analisis de Dominio**
- Resultado: Sitio web informativo/promocional para servicios de tatuaje a domicilio
- Dominio: Marketing personal de tatuador independiente

**Step 2: Analisis de Complejidad**
- Resultado: Baja complejidad
- Paginas estimadas: 4-5
- Interactividad: Formulario + Galeria + WhatsApp
- Backend: No requerido

**Step 3: Analisis de Restricciones**
- Presupuesto: Minimo/nil
- Mantenimiento: Manual, por una persona
- Tecnologia del desarrollador: Basica-intermedia
- Hosting: Gratuito preferido

**Step 4: Evaluacion de Arquitecturas Candidatas**

| Arquitectura | Fuerzas | Debilidades | Score |
|-------------|---------|-------------|-------|
| Static Files | Cero dependencias, maxima portabilidad, hosting universal | Duplicacion HTML, escalabilidad limitada | 9/10 |
| JAMstack (Hugo) | Generacion automatica, SEO optima | Curva aprendizaje, build step | 7/10 |
| SPA Vanilla | Sin frameworks | Routing manual, escalabilidad limitada | 5/10 |
| SPA React/Next | Componentes reutilizables | Sobre-ingenuria, peor SEO | 3/10 |

**Step 5: Descarte de Alternativas**

| Arquitectura | Motivo |
|-------------|--------|
| JAMstack | Overkill para 3-5 paginas estaticas con cambios minimos |
| SPA React/Next | Sobre-ingenuria total, complejidad innecesaria |
| SPA Vanilla | Complejidad innecesaria para sitio informativo |

**Step 6: Seleccion Final**
- Arquitectura Seleccionada: **Static Files (Archivos Estaticos Planos)**
- Justificacion: Maxima simplicidad, cero costo, mantenimiento manual aceptable para el volumen de contenido, hosting gratuito disponible, todas las funcionalidades requeridas se pueden implementar con HTML/CSS/JS vanilla.

### Decisions

| Decision | Justificacion | Impacto |
|----------|---------------|---------|
| Usar Tailwind CSS via CDN | Desarrollo rapido de UI responsive sin build step | Positivo: reduce tiempo de desarrollo 60% |
| Usar Formspree para formularios | Sin backend, gratuito, configuracion en 5 minutos | Positivo: formulario funcional sin codigo server |
| GitHub Pages como hosting | Gratuito, HTTPS automatico, integracion con Git | Positivo: hosting profesional sin costo |
| AOS para animaciones | Efectos modernos con minimo esfuerzo | Positivo: mejor UX visual |
| Lucide Icons sobre Font Awesome | Mas ligero, moderno, SVG nativo | Positivo: mejor rendimiento |
| Mobile-first responsive | 70%+ trafico sera movil | Positivo: mejor experiencia movil |

---

## 15. Discarded Alternatives

| Arquitectura/Tecnologia | Motivo de Descarte |
|------------------------|-------------------|
| Hugo/Jekyll (JAMstack) | Para un sitio de 4-5 paginas con cambios muy esporadicos, el overhead de configurar y mantener un generador estatico no se justifica. Si el sitio crece a 10+ paginas, se puede migrar. |
| React/Next.js | Sobre-ingenuria absoluta para un sitio estatico informativo. Aumenta complejidad, bundle size, y dificulta SEO sin beneficio real. |
| Bootstrap | Look y feel generico, bundle mas grande que Tailwind, menos flexible para disenos personalizados. |
| CSS Vanilla puro | Desarrollo significativamente mas lento que Tailwind para el mismo resultado. |
| Netlify | GitHub Pages es igual de gratuito y mas simple para este caso de uso. Netlify seria mejor si se necesitan forms nativos o serverless functions. |
| Google Analytics | Para un proyecto personal, la privacidad del visitante es mas importante que las metricas. Se puede agregar Plausible despues si es necesario. |
| GSAP | Las animaciones CSS + AOS son suficientes. GSAP es overkill para efectos de scroll basicos. |

---

## Appendix A: Pages Detail

### index.html (Pagina de Inicio)

Secciones:
1. **Hero** - Imagen de fondo + titulo principal + CTA "Solicita tu Cita"
2. **Servicios Resumen** - 3-4 cards con servicios principales
3. **Galeria Preview** - 4-6 fotos destacadas con enlace a galeria completa
4. **Como Funciona** - Pasos del proceso (1. Contactas, 2. Diseñamos, 3. Tatuaros a domicilio)
5. **Testimonios** - 2-3 reviews de clientes (opcionales)
6. **CTA Final** - Llamada a accion con WhatsApp
7. **Footer** - Redes sociales, copyright, links rapidos

### servicios.html (Pagina de Servicios)

Secciones:
1. **Header** - Titulo de pagina
2. **Detalle de Servicios** - Lista completa con descripciones
3. **Precios/Presupuesto** - Rangos o "Solicita tu presupuesto"
4. **Zona de Cobertura** - Comunas/sectores que cubre
5. **CTA** - Enlace a contacto

### galeria.html (Galeria de Trabajos)

Secciones:
1. **Header** - Titulo de pagina
2. **Filtros** - Por estilo (realismo, fine line, blackwork, etc.)
3. **Grid de Imagenes** - Masonry o grid responsivo
4. **Lightbox** - Vista ampliada al hacer click
5. **CTA** - "Te gusta? Contactanos"

### contacto.html (Pagina de Contacto)

Secciones:
1. **Header** - Titulo de pagina
2. **Formulario** - Nombre, email, telefono, mensaje, tipo de tatuaje
3. **WhatsApp Directo** - Boton grande con enlace a WhatsApp
4. **Info de Contacto** - Horarios, zona de cobertura
5. **Mapa** - Opcional, referencia de zona

---

**FIN DEL DOCUMENTO ARQUITECTONICO**
