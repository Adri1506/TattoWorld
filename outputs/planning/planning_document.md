# Planning Document: TattoWorld

> **Agente generador:** Planner Agent v1.1.0
> **Fecha:** 2026-06-14
> **Input:** architecture_summary.yaml + design_summary.yaml
> **Objetivo:** Plan de implementación completo para web estática de tatuajes a domicilio

---

## Resumen Ejecutivo

| Campo | Valor |
|-------|-------|
| **Fases** | 6 |
| **Épicas** | 7 |
| **Features** | 18 |
| **Escenarios** | 32 |
| **Tareas** | 45 |
| **Complejidad total** | LOW (< 50 tareas) |
| **Stack** | HTML5, Tailwind CSS (CDN), JS Vanilla, AOS, Lucide, Formspree |
| **Páginas** | 4 (Home, Servicios, Galería, Contacto) |
| **Hosting** | GitHub Pages |

---

## Fases de Desarrollo

### Fase 1: Foundation (Fundamentos)
**Objetivo:** Preparar entorno, estructura de directorios y assets base.

| ID | Nombre | Descripción |
|----|--------|-------------|
| PH01 | Foundation | Estructura de directorios, optimización de imágenes, configuración base del proyecto |

---

### Fase 2: Core Features (Componentes Base)
**Objetivo:** Implementar componentes reutilizables que todas las páginas comparten.

| ID | Nombre | Descripción |
|----|--------|-------------|
| PH02 | Core Features | Navbar, Footer, WhatsApp Button, Page Header, CTA Section |

---

### Fase 3: Page Development (Desarrollo de Páginas)
**Objetivo:** Construir las 4 páginas HTML con sus componentes específicos.

| ID | Nombre | Descripción |
|----|--------|-------------|
| PH03 | Page Development | Home, Servicios, Galería, Contacto |

---

### Fase 4: Advanced Features (Funcionalidades Avanzadas)
**Objetivo:** Implementar interactividad: lightbox, filtros, formulario, validaciones.

| ID | Nombre | Descripción |
|----|--------|-------------|
| PH04 | Advanced Features | Lightbox, Filter Gallery, Contact Form, Formspree Integration |

---

### Fase 5: Optimization (Optimización)
**Objetivo:** SEO, performance, accesibilidad y responsive fine-tuning.

| ID | Nombre | Descripción |
|----|--------|-------------|
| PH05 | Optimization | Meta tags, Open Graph, lazy loading, AOS, accesibilidad |

---

### Fase 6: Release Preparation (Preparación de Lanzamiento)
**Objetivo:** Documentación, testing final y despliegue a GitHub Pages.

| ID | Nombre | Descripción |
|----|--------|-------------|
| PH06 | Release Preparation | README, CHANGELOG, validación HTML, deploy GitHub Pages |

---

## Épicas y Features

### ÉPICA E01: Project Setup
**Fase ref:** PH01

| Feature ID | Nombre | Descripción |
|------------|--------|-------------|
| F01 | Estructura de Directorios | Crear árbol de carpetas del proyecto |
| F02 | Optimización de Imágenes | Procesar fotos de evidencias/ para web |
| F03 | Configuración Base | Archivos base (tailwind config, variables CSS) |

---

### ÉPICA E02: Shared Components
**Fase ref:** PH02

| Feature ID | Nombre | Descripción |
|------------|--------|-------------|
| F04 | Navbar Component | Barra de navegación responsive con menú móvil |
| F05 | Footer Component | Pie de página con información y redes sociales |
| F06 | WhatsApp Floating Button | Botón flotante con enlace directo a WhatsApp |
| F07 | Page Header Component | Encabezado de página con título y breadcrumb |
| F08 | CTA Section Component | Sección de llamada a la acción |

---

### ÉPICA E03: Home Page
**Fase ref:** PH03

| Feature ID | Nombre | Descripción |
|------------|--------|-------------|
| F09 | Hero Section | Sección principal con imagen de fondo y CTA |
| F10 | Service Cards Preview | Vista previa de servicios en cards |
| F11 | Gallery Preview | Grid preview de trabajos realizados |
| F12 | How It Works | Sección de proceso paso a paso |

---

### ÉPICA E04: Servicios Page
**Fase ref:** PH03

| Feature ID | Nombre | Descripción |
|------------|--------|-------------|
| F13 | Service Detail Cards | Tarjetas detalladas de cada servicio |
| F14 | Pricing Section | Sección de precios y paquetes |
| F15 | Coverage Section | Zonas de cobertura a domicilio |

---

### ÉPICA E05: Galería Page
**Fase ref:** PH03, PH04

| Feature ID | Nombre | Descripción |
|------------|--------|-------------|
| F16 | Gallery Grid | Grid de imágenes con lazy loading |
| F17 | Filter Bar | Barra de filtros por estilo de tatuaje |
| F18 | Lightbox Modal | Modal para vista ampliada de imágenes |

---

### ÉPICA E06: Contacto Page
**Fase ref:** PH03, PH04

| Feature ID | Nombre | Descripción |
|------------|--------|-------------|
| F19 | Contact Form | Formulario de contacto con Formspree |
| F20 | WhatsApp Card | Card con enlace directo a WhatsApp |
| F21 | Contact Info | Información de contacto y ubicación |

---

### ÉPICA E07: Quality & Deployment
**Fase ref:** PH05, PH06

| Feature ID | Nombre | Descripción |
|------------|--------|-------------|
| F22 | SEO & Meta Tags | Meta tags, Open Graph, sitemap básico |
| F23 | Animations (AOS) | Animaciones de scroll con AOS |
| F24 | Responsive Fine-tuning | Ajustes finos de responsive design |
| F25 | Documentation | README, CHANGELOG, guía de mantenimiento |
| F26 | GitHub Pages Deploy | Configuración y despliegue final |

---

## Escenarios Gherkin

### Feature F01: Estructura de Directorios

```gherkin
Feature: Estructura de Directorios

  Scenario: Crear árbol de carpetas del proyecto
    Given el proyecto no tiene estructura de directorios
    When se ejecuta la creación de carpetas
    Then se crea la carpeta "assets/css/"
    And se crea la carpeta "assets/js/"
    And se crea la carpeta "assets/img/"
    And se crea la carpeta "assets/img/gallery/"
    And se crea la carpeta "assets/img/icons/"
    And se crea la carpeta "pages/"
    And se crea la carpeta "evidencias/"
```

### Feature F02: Optimización de Imágenes

```gherkin
Feature: Optimización de Imágenes

  Scenario: Optimizar imágenes para web
    Given existen 6 imágenes en "evidencias/" (foto1.png a foto6.png)
    When se procesan las imágenes con Squoosh
    Then se genera versión webp de cada imagen
    And cada imagen webp pesa menos de 200KB
    And se copian las imágenes optimizadas a "assets/img/gallery/"
    And las imágenes originales se mantienen en "evidencias/"

  Scenario: Generar thumbnails para galería
    Given las imágenes están optimizadas en "assets/img/gallery/"
    When se generan thumbnails
    Then se crea versión 400x400px de cada imagen
    And los thumbnails pesan menos de 50KB cada uno
```

### Feature F03: Configuración Base

```gherkin
Feature: Configuración Base

  Scenario: Crear archivo de configuración de Tailwind
    Given el proyecto usa Tailwind CSS vía CDN
    When se crea el archivo "assets/css/tailwind-config.js"
    Then se definen los colores del design system
    And se define la tipografía Inter
    And se configuran los breakpoints

  Scenario: Crear variables CSS globales
    Given el design system define tokens de diseño
    When se crea el archivo "assets/css/styles.css"
    Then se declaran variables CSS para colores
    And se declaran variables CSS para espaciados
    And se incluyen estilos base (reset, tipografía)
```

### Feature F04: Navbar Component

```gherkin
Feature: Navbar Component

  Scenario: Mostrar navbar en desktop
    Given el usuario está en cualquier página
    And la pantalla tiene ancho mayor a 768px
    When se carga la página
    Then se muestra la barra de navegación
    And se muestran los enlaces: Home, Servicios, Galería, Contacto
    And el logo está visible a la izquierda

  Scenario: Mostrar menú hamburguesa en móvil
    Given el usuario está en cualquier página
    And la pantalla tiene ancho menor o igual a 768px
    When se carga la página
    Then se muestra el ícono de menú hamburguesa
    And los enlaces de navegación están ocultos

  Scenario: Abrir menú móvil al hacer clic
    Given el menú móvil está cerrado
    When el usuario hace clic en el ícono de menú
    Then se despliega el menú de navegación
    And se muestran los enlaces de navegación
    And el ícono cambia a ícono de cerrar

  Scenario: Cerrar menú móvil al seleccionar enlace
    Given el menú móvil está abierto
    When el usuario hace clic en un enlace de navegación
    Then el menú se cierra
    And se navega a la página seleccionada

  Scenario: Cambiar estilo al hacer scroll
    Given el usuario está en cualquier página
    When el usuario hace scroll más de 50px
    Then la navbar cambia a fondo semi-transparente
    And se agrega sombra sutil
```

### Feature F05: Footer Component

```gherkin
Feature: Footer Component

  Scenario: Mostrar footer completo
    Given el usuario está en cualquier página
    When se hace scroll hasta el final
    Then se muestra el footer
    And se muestra información del tatuador
    And se muestran enlaces a redes sociales
    And se muestra copyright con año actual

  Scenario: Mostrar enlaces de navegación en footer
    Given el footer está visible
    When se revisan los enlaces
    Then hay enlace a Home
    And hay enlace a Servicios
    And hay enlace a Galería
    And hay enlace a Contacto
```

### Feature F06: WhatsApp Floating Button

```gherkin
Feature: WhatsApp Floating Button

  Scenario: Mostrar botón flotante
    Given el usuario está en cualquier página
    When se carga la página
    Then se muestra el botón de WhatsApp
    And el botón está fijo en la esquina inferior derecha
    And el botón tiene ícono de WhatsApp

  Scenario: Abrir WhatsApp al hacer clic
    Given el botón de WhatsApp está visible
    When el usuario hace clic en el botón
    Then se abre WhatsApp con un mensaje predefinido
    And el mensaje incluye saludo y contexto del sitio

  Scenario: Mostrar tooltip al pasar鼠标
    Given el botón de WhatsApp está visible
    When el usuario pasa el cursor sobre el botón
    Then se muestra un tooltip con texto "¡Escríbenos!"
```

### Feature F07: Page Header Component

```gherkin
Feature: Page Header Component

  Scenario: Mostrar encabezado de página
    Given el usuario está en Servicios, Galería o Contacto
    When se carga la página
    Then se muestra un encabezado con título de la página
    And se muestra una descripción breve
    And el fondo es consistente con el design system
```

### Feature F08: CTA Section Component

```gherkin
Feature: CTA Section Component

  Scenario: Mostrar sección CTA
    Given el usuario está en Home, Servicios o Galería
    When se hace scroll a la sección CTA
    Then se muestra un mensaje persuasivo
    And hay un botón de "Agenda tu Cita"
    And hay un botón de "Escríbenos por WhatsApp"

  Scenario: Navegar al contacto desde CTA
    Given la sección CTA está visible
    When el usuario hace clic en "Agenda tu Cita"
    Then se navega a la página de Contacto
```

### Feature F09: Hero Section

```gherkin
Feature: Hero Section

  Scenario: Mostrar hero section en Home
    Given el usuario está en la página Home
    When se carga la página
    Then se muestra una imagen de fondo de alta calidad
    And se muestra el título principal
    And se muestra un subtítulo descriptivo
    And hay un botón de CTA principal

  Scenario: Responsive hero en móvil
    Given el usuario está en Home con pantalla móvil
    When se carga la página
    Then la imagen de fondo se adapta al tamaño
    And el texto es legible
    And los botones son tocables (mínimo 44px)
```

### Feature F10: Service Cards Preview

```gherkin
Feature: Service Cards Preview

  Scenario: Mostrar cards de servicios en Home
    Given el usuario está en Home
    When se hace scroll a la sección de servicios
    Then se muestran 3 cards de servicios principales
    And cada card tiene ícono, título y descripción breve
    And las cards tienen efecto hover

  Scenario: Navegar a Servicios desde card
    Given una card de servicio está visible
    When el usuario hace clic en la card
    Then se navega a la página de Servicios
```

### Feature F11: Gallery Preview

```gherkin
Feature: Gallery Preview

  Scenario: Mostrar preview de galería en Home
    Given el usuario está en Home
    When se hace scroll a la sección de galería
    Then se muestran 6 imágenes en grid
    And las imágenes tienen lazy loading
    And hay un enlace "Ver más trabajos"

  Scenario: Navegar a Galería desde preview
    Given el preview de galería está visible
    When el usuario hace clic en "Ver más trabajos"
    Then se navega a la página de Galería
```

### Feature F12: How It Works

```gherkin
Feature: How It Works

  Scenario: Mostrar proceso de trabajo
    Given el usuario está en Home
    When se hace scroll a la sección "Cómo funciona"
    Then se muestran 4 pasos del proceso
    And cada paso tiene número, título y descripción
    And los pasos están conectados visualmente
```

### Feature F13: Service Detail Cards

```gherkin
Feature: Service Detail Cards

  Scenario: Mostrar servicios detallados
    Given el usuario está en Servicios
    When se carga la página
    Then se muestran cards detalladas de cada servicio
    And cada card incluye: nombre, descripción, precio, duración
    And las cards tienen efecto hover

  Scenario: Mostrar información de precio
    Given una card de servicio está visible
    When el usuario revisa la card
    Then se muestra el precio del servicio
    And se muestra la duración estimada
    And se muestra qué incluye el servicio
```

### Feature F14: Pricing Section

```gherkin
Feature: Pricing Section

  Scenario: Mostrar tabla de precios
    Given el usuario está en Servicios
    When se hace scroll a la sección de precios
    Then se muestra una tabla o cards con precios
    And se incluyen precios base y adicionales
    And se muestra información de descuentos si aplica
```

### Feature F15: Coverage Section

```gherkin
Feature: Coverage Section

  Scenario: Mostrar zonas de cobertura
    Given el usuario está en Servicios
    When se hace scroll a la sección de cobertura
    Then se muestran las zonas donde se presta servicio
    And se indica si hay costo adicional por zona
    And se muestra mapa o lista de comunas
```

### Feature F16: Gallery Grid

```gherkin
Feature: Gallery Grid

  Scenario: Mostrar galería completa
    Given el usuario está en Galería
    When se carga la página
    Then se muestran todas las imágenes en grid responsive
    And las imágenes tienen lazy loading
    And cada imagen tiene efecto hover

  Scenario: Grid responsive en móvil
    Given el usuario está en Galería con pantalla móvil
    When se carga la página
    Then el grid muestra 1 columna
    And las imágenes se apilan verticalmente

  Scenario: Grid responsive en tablet
    Given el usuario está en Galería con pantalla tablet
    When se carga la página
    Then el grid muestra 2 columnas
```

### Feature F17: Filter Bar

```gherkin
Feature: Filter Bar

  Scenario: Mostrar filtros de galería
    Given el usuario está en Galería
    When se carga la página
    Then se muestra una barra de filtros
    And hay filtro "Todos" seleccionado por defecto
    And hay filtros por estilo (ej: Realismo, Blackwork, Minimalista)

  Scenario: Filtrar por estilo
    Given la barra de filtros está visible
    When el usuario hace clic en un filtro
    Then se muestran solo imágenes de ese estilo
    And las imágenes no seleccionadas se ocultan con animación

  Scenario: Volver a mostrar todos
    Given un filtro está activo
    When el usuario hace clic en "Todos"
    Then se muestran todas las imágenes
```

### Feature F18: Lightbox Modal

```gherkin
Feature: Lightbox Modal

  Scenario: Abrir lightbox al hacer clic en imagen
    Given el usuario está en Galería
    When hace clic en una imagen
    Then se abre un modal con la imagen ampliada
    And el fondo se oscurece
    And hay botón de cerrar

  Scenario: Navegar entre imágenes en lightbox
    Given el lightbox está abierto
    When el usuario hace clic en flecha izquierda
    Then se muestra la imagen anterior

  Scenario: Navegar a siguiente imagen
    Given el lightbox está abierto
    When el usuario hace clic en flecha derecha
    Then se muestra la siguiente imagen

  Scenario: Cerrar lightbox
    Given el lightbox está abierto
    When el usuario hace clic en cerrar o fuera del modal
    Then el lightbox se cierra
    And se vuelve a la galería

  Scenario: Navegar con teclado
    Given el lightbox está abierto
    When el usuario presiona flecha izquierda
    Then se muestra la imagen anterior
    When el usuario presiona flecha derecha
    Then se muestra la siguiente imagen
    When el usuario presiona Escape
    Then el lightbox se cierra
```

### Feature F19: Contact Form

```gherkin
Feature: Contact Form

  Scenario: Mostrar formulario de contacto
    Given el usuario está en Contacto
    When se carga la página
    Then se muestra el formulario con campos: nombre, email, teléfono, mensaje
    And hay un botón "Enviar Mensaje"
    And los campos son requeridos

  Scenario: Enviar formulario exitosamente
    Given el usuario está en Contacto
    When llena todos los campos correctamente
    And hace clic en "Enviar Mensaje"
    Then se muestra mensaje de éxito
    And el formulario se limpia
    And el mensaje se envía a Formspree

  Scenario: Validar campos requeridos
    Given el usuario está en Contacto
    When hace clic en "Enviar Mensaje" sin llenar campos
    Then se muestran mensajes de error en campos requeridos
    And el formulario no se envía

  Scenario: Validar formato de email
    Given el usuario está en Contacto
    When ingresa un email con formato inválido
    And hace clic en "Enviar Mensaje"
    Then se muestra error de validación en email
    And el formulario no se envía

  Scenario: Mostrar estado de carga
    Given el usuario envió el formulario
    When el formulario está procesando
    Then se muestra indicador de carga
    And el botón se deshabilita

  Scenario: Mostrar error de envío
    Given el usuario envió el formulario
    When hay error de conexión con Formspree
    Then se muestra mensaje de error
    And el usuario puede reintentar
```

### Feature F20: WhatsApp Card

```gherkin
Feature: WhatsApp Card

  Scenario: Mostrar card de WhatsApp
    Given el usuario está en Contacto
    When se carga la página
    Then se muestra una card con información de WhatsApp
    And hay botón para abrir WhatsApp
    And se muestra horario de respuesta

  Scenario: Abrir WhatsApp desde card
    Given la card de WhatsApp está visible
    When el usuario hace clic en el botón
    Then se abre WhatsApp con mensaje predefinido
```

### Feature F21: Contact Info

```gherkin
Feature: Contact Info

  Scenario: Mostrar información de contacto
    Given el usuario está en Contacto
    When se carga la página
    Then se muestra información de contacto
    And se muestra email de contacto
    And se muestra ubicación o zona de cobertura
    And se muestran redes sociales si aplican
```

### Feature F22: SEO & Meta Tags

```gherkin
Feature: SEO & Meta Tags

  Scenario: Incluir meta tags en todas las páginas
    Given cualquiera de las 4 páginas está abierta
    When se inspecciona el HTML
    Then hay meta tag "description"
    And hay meta tag "keywords"
    And hay meta tag "viewport"
    And hay meta tag "charset"

  Scenario: Incluir Open Graph tags
    Given cualquiera de las 4 páginas está abierta
    When se inspecciona el HTML
    Then hay meta tag "og:title"
    And hay meta tag "og:description"
    And hay meta tag "og:image"
    And hay meta tag "og:url"

  Scenario: Incluir favicon
    Given cualquiera de las 4 páginas está abierta
    When se inspecciona el HTML
    Then hay link tag para favicon
```

### Feature F23: Animations (AOS)

```gherkin
Feature: Animations (AOS)

  Scenario: Aplicar animaciones de scroll
    Given el usuario está en cualquier página
    When hace scroll hacia abajo
    Then los elementos aparecen con animación
    And las animaciones son sutiles (fade-up, fade-in)
    And no hay más de 3 animaciones diferentes

  Scenario: Deshabilitar animaciones en móvil
    Given el usuario está en un dispositivo móvil
    When se carga la página
    Then las animaciones se deshabilitan o simplifican
    And el rendimiento no se ve afectado
```

### Feature F24: Responsive Fine-tuning

```gherkin
Feature: Responsive Fine-tuning

  Scenario: Verificar responsive en móvil (320px-480px)
    Given el usuario tiene un dispositivo móvil pequeño
    When visita cualquier página
    Then todo el contenido es visible
    And no hay elementos desbordados
    And la navegación funciona correctamente

  Scenario: Verificar responsive en tablet (768px-1024px)
    Given el usuario tiene una tablet
    When visita cualquier página
    Then el layout se adapta al tamaño
    And las imágenes se escalan correctamente

  Scenario: Verificar responsive en desktop (>1024px)
    Given el usuario tiene un monitor
    When visita cualquier página
    Then el layout muestra el diseño completo
    And el contenido está centrado y con max-width
```

### Feature F25: Documentation

```gherkin
Feature: Documentation

  Scenario: Crear README.md
    Given el proyecto está completo
    When se crea el README
    Then incluye descripción del proyecto
    And incluye instrucciones de instalación
    And incluye guía de mantenimiento
    And incluye estructura de directorios

  Scenario: Crear CHANGELOG.md
    Given el proyecto está completo
    When se crea el CHANGELOG
    Then incluye versiones y cambios
    And incluye fecha de cada versión
```

### Feature F26: GitHub Pages Deploy

```gherkin
Feature: GitHub Pages Deploy

  Scenario: Configurar GitHub Pages
    Given el código está en GitHub
    When se configura GitHub Pages
    Then el sitio se despliega en la URL correcta
    And HTTPS está habilitado
    And el sitio es accesible públicamente

  Scenario: Verificar despliegue
    Given GitHub Pages está configurado
    When se accede a la URL del sitio
    Then todas las páginas cargan correctamente
    And las imágenes se muestran
    And el formulario funciona
```

---

## Tareas Técnicas

### Fase 1: Foundation

#### Tarea T01: Crear estructura de directorios
- **ID:** T01
- **Phase ref:** PH01
- **Epic ref:** E01
- **Feature ref:** F01
- **Scenario ref:** F01-S01
- **Title:** Crear árbol de carpetas del proyecto
- **Description:** Crear la estructura completa de directorios para el proyecto TattoWorld.
- **Objective:** Tener la estructura base para organizar todos los archivos del proyecto.
- **Inputs:** architecture_summary.yaml
- **Outputs:** Estructura de carpetas creada
- **Acceptance Criteria:**
  - Existencia de carpetas: assets/css/, assets/js/, assets/img/, assets/img/gallery/, assets/img/icons/, pages/
  - Todas las carpetas están vacías y listas para recibir archivos
- **Dependencies:** Ninguna
- **Estimated Complexity:** low

#### Tarea T02: Optimizar imágenes para web
- **ID:** T02
- **Phase ref:** PH01
- **Epic ref:** E01
- **Feature ref:** F02
- **Scenario ref:** F02-S01
- **Title:** Procesar imágenes de evidencias/ con Squoosh
- **Description:** Optimizar las 6 imágenes (foto1.png a foto6.png) para uso en web, generando versiones webp y thumbnails.
- **Objective:** Reducir tamaño de imágenes sin perder calidad visual.
- **Inputs:** evidencias/foto1.png a foto6.png
- **Outputs:** Imágenes webp optimizadas en assets/img/gallery/
- **Acceptance Criteria:**
  - Cada imagen webp pesa menos de 200KB
  - Se generan thumbnails de 400x400px (menos de 50KB cada uno)
  - Las imágenes originales se mantienen en evidencias/
  - Las imágenes optimizadas se guardan en assets/img/gallery/
- **Dependencies:** T01
- **Estimated Complexity:** low

#### T03: Crear configuración de Tailwind
- **ID:** T03
- **Phase ref:** PH01
- **Epic ref:** E01
- **Feature ref:** F03
- **Scenario ref:** F03-S01
- **Title:** Crear archivo de configuración de Tailwind
- **Description:** Crear archivo de configuración de Tailwind CSS con los tokens del design system.
- **Objective:** Definir colores, tipografía y breakpoints del proyecto.
- **Inputs:** design_summary.yaml (design_tokens)
- **Outputs:** assets/css/tailwind-config.js
- **Acceptance Criteria:**
  - Colores definidos: primary (#1a1a1a), accent (#c9a227), background (#0d0d0d)
  - Tipografía Inter configurada
  - Breakpoints responsive definidos
- **Dependencies:** T01
- **Estimated Complexity:** low

#### T04: Crear estilos CSS globales
- **ID:** T04
- **Phase ref:** PH01
- **Epic ref:** E01
- **Feature ref:** F03
- **Scenario ref:** F03-S02
- **Title:** Crear archivo styles.css con variables y estilos base
- **Description:** Crear archivo CSS principal con variables del design system y estilos base.
- **Objective:** Establecer estilos globales y reset de tipografía.
- **Inputs:** design_summary.yaml (design_tokens)
- **Outputs:** assets/css/styles.css
- **Acceptance Variables:**
  - Variables CSS para colores del design system
  - Variables CSS para espaciados
  - Reset CSS básico
  - Estilos de tipografía base
- **Dependencies:** T01
- **Estimated Complexity:** low

#### T05: Crear plantilla base HTML
- **ID:** T05
- **Phase ref:** PH01
- **Epic ref:** E01
- **Feature ref:** F03
- **Scenario ref:** F03-S01
- **Title:** Crear template HTML base con CDN links
- **Description:** Crear archivo HTML plantilla con todas las dependencias CDN incluidas.
- **Objective:** Tener base HTML reutilizable para todas las páginas.
- **Inputs:** architecture_summary.yaml (stack)
- **Outputs:** assets/templates/base.html
- **Acceptance Criteria:**
  - CDN de Tailwind CSS incluido
  - CDN de AOS incluido
  - CDN de Lucide Icons incluido
  - Google Fonts Inter incluido
  - Estructura HTML5 válida
- **Dependencies:** T01
- **Estimated Complexity:** low

---

### Fase 2: Core Features

#### T06: Implementar Navbar
- **ID:** T06
- **Phase ref:** PH02
- **Epic ref:** E02
- **Feature ref:** F04
- **Scenario ref:** F04-S01, F04-S02, F04-S03, F04-S04, F04-S05
- **Title:** Crear componente Navbar responsive
- **Description:** Implementar barra de navegación con menú móvil, logo y enlaces.
- **Objective:** Navegación consistente en todas las páginas.
- **Inputs:** design_summary.yaml, T05
- **Outputs:** assets/components/navbar.html (snippet para incluir)
- **Acceptance Criteria:**
  - Logo visible a la izquierda
  - Enlaces: Home, Servicios, Galería, Contacto
  - Menú hamburguesa en móvil (<768px)
  - Efecto de fondo al hacer scroll (>50px)
  - Transiciones suaves
- **Dependencies:** T05
- **Estimated Complexity:** low

#### T07: Implementar Footer
- **ID:** T07
- **Phase ref:** PH02
- **Epic ref:** E02
- **Feature ref:** F05
- **Scenario ref:** F05-S01, F05-S02
- **Title:** Crear componente Footer
- **Description:** Implementar pie de página con información, enlaces y redes sociales.
- **Objective:** Footer informativo y consistente.
- **Inputs:** design_summary.yaml, T05
- **Outputs:** assets/components/footer.html
- **Acceptance Criteria:**
  - Información del tatuador
  - Enlaces de navegación
  - Redes sociales
  - Copyright con año actual
  - Diseño responsive
- **Dependencies:** T05
- **Estimated Complexity:** low

#### T08: Implementar WhatsApp Button
- **ID:** T08
- **Phase ref:** PH02
- **Epic ref:** E02
- **Feature ref:** F06
- **Scenario ref:** F06-S01, F06-S02, F06-S03
- **Title:** Crear botón flotante de WhatsApp
- **Description:** Implementar botón fijo con enlace directo a WhatsApp con mensaje predefinido.
- **Objective:** Contacto rápido vía WhatsApp siempre visible.
- **Inputs:** design_summary.yaml, T05
- **Outputs:** assets/components/whatsapp-button.html
- **Acceptance Criteria:**
  - Posición fija: esquina inferior derecha
  - Ícono de WhatsApp visible
  - Enlace a WhatsApp con mensaje predefinido
  - Tooltip al pasar cursor
  - Efecto hover
- **Dependencies:** T05
- **Estimated Complexity:** low

#### T09: Implementar Page Header
- **ID:** T09
- **Phase ref:** PH02
- **Epic ref:** E02
- **Feature ref:** F07
- **Scenario ref:** F07-S01
- **Title:** Crear componente Page Header
- **Description:** Implementar encabezado reutilizable para páginas internas.
- **Objective:** Encabezado consistente en Servicios, Galería y Contacto.
- **Inputs:** design_summary.yaml, T05
- **Outputs:** assets/components/page-header.html
- **Acceptance Criteria:**
  - Título de página
  - Descripción breve
  - Fondo consistente con design system
  - Responsive
- **Dependencies:** T05
- **Estimated Complexity:** low

#### T10: Implementar CTA Section
- **ID:** T10
- **Phase ref:** PH02
- **Epic ref:** E02
- **Feature ref:** F08
- **Scenario ref:** F08-S01, F08-S02
- **Title:** Crear componente CTA Section
- **Description:** Implementar sección de llamada a la acción con botones.
- **Objective:** Convertir visitantes en contactos.
- **Inputs:** design_summary.yaml, T05
- **Outputs:** assets/components/cta-section.html
- **Acceptance Criteria:**
  - Mensaje persuasivo
  - Botón "Agenda tu Cita"
  - Botón "Escríbenos por WhatsApp"
  - Navegación a Contacto
- **Dependencies:** T05
- **Estimated Complexity:** low

---

### Fase 3: Page Development

#### T11: Crear página Home
- **ID:** T11
- **Phase ref:** PH03
- **Epic ref:** E03
- **Feature ref:** F09, F10, F11, F12
- **Scenario ref:** F09-S01, F09-S02, F10-S01, F10-S02, F11-S01, F11-S02, F12-S01
- **Title:** Construir página Home completa
- **Description:** Ensamblar todos los componentes en la página principal (index.html).
- **Objective:** Página de inicio atractiva y funcional.
- **Inputs:** T06, T07, T08, T10
- **Outputs:** index.html
- **Acceptance Criteria:**
  - Hero Section con imagen de fondo
  - Service Cards Preview (3 servicios)
  - Gallery Preview (6 imágenes)
  - How It Works (4 pasos)
  - CTA Section
  - Navbar y Footer incluidos
  - WhatsApp Button incluido
  - Responsive mobile-first
- **Dependencies:** T06, T07, T08, T10
- **Estimated Complexity:** medium

#### T12: Crear página Servicios
- **ID:** T12
- **Phase ref:** PH03
- **Epic ref:** E04
- **Feature ref:** F13, F14, F15
- **Scenario ref:** F13-S01, F13-S02, F14-S01, F15-S01
- **Title:** Construir página Servicios
- **Description:** Crear página de servicios con cards detalladas, precios y cobertura.
- **Objective:** Informar sobre servicios y precios.
- **Inputs:** T06, T07, T08, T09, T10
- **Outputs:** pages/servicios.html
- **Acceptance Criteria:**
  - Page Header con título "Servicios"
  - Service Detail Cards con nombre, descripción, precio, duración
  - Pricing Section
  - Coverage Section
  - CTA Section
  - Navbar y Footer incluidos
  - WhatsApp Button incluido
  - Responsive
- **Dependencies:** T06, T07, T08, T09, T10
- **Estimated Complexity:** medium

#### T13: Crear página Galería
- **ID:** T13
- **Phase ref:** PH03
- **Epic ref:** E05
- **Feature ref:** F16, F17, F18
- **Scenario ref:** F16-S01, F16-S02, F16-S03, F17-S01
- **Title:** Construir página Galería (base)
- **Description:** Crear página de galería con grid de imágenes y barra de filtros.
- **Objective:** Mostrar portafolio de trabajos realizados.
- **Inputs:** T02, T06, T07, T08, T09
- **Outputs:** pages/galeria.html
- **Acceptance Criteria:**
  - Page Header con título "Galería"
  - Gallery Grid responsive (1 col móvil, 2 tablet, 3+ desktop)
  - Filter Bar con opciones de estilo
  - Lazy loading en imágenes
  - Navbar y Footer incluidos
  - WhatsApp Button incluido
- **Dependencies:** T02, T06, T07, T08, T09
- **Estimated Complexity:** medium

#### T14: Crear página Contacto
- **ID:** T14
- **Phase ref:** PH03
- **Epic ref:** E06
- **Feature ref:** F19, F20, F21
- **Scenario ref:** F19-S01, F20-S01, F21-S01
- **Title:** Construir página Contacto
- **Description:** Crear página de contacto con formulario, card WhatsApp e información.
- **Objective:** Facilitar el contacto con el tatuador.
- **Inputs:** T06, T07, T08, T09
- **Outputs:** pages/contacto.html
- **Acceptance Criteria:**
  - Page Header con título "Contacto"
  - Contact Form (nombre, email, teléfono, mensaje)
  - WhatsApp Card
  - Contact Info
  - Navbar y Footer incluidos
  - WhatsApp Button incluido
  - Responsive
- **Dependencies:** T06, T07, T08, T09
- **Estimated Complexity:** medium

---

### Fase 4: Advanced Features

#### T15: Implementar Lightbox
- **ID:** T15
- **Phase ref:** PH04
- **Epic ref:** E05
- **Feature ref:** F18
- **Scenario ref:** F18-S01, F18-S02, F18-S03, F18-S04, F18-S05
- **Title:** Crear componente Lightbox Modal
- **Description:** Implementar modal para vista ampliada de imágenes con navegación.
- **Objective:** Permitir ver imágenes en tamaño completo.
- **Inputs:** T13
- **Outputs:** assets/js/lightbox.js + assets/css/lightbox.css
- **Acceptance Criteria:**
  - Modal se abre al clickear imagen
  - Navegación con flechas (izquierda/derecha)
  - Cierre con botón, clic fuera o Escape
  - Navegación con teclado
  - Animaciones suaves
  - Responsive
- **Dependencies:** T13
- **Estimated Complexity:** medium

#### T16: Implementar Filter Gallery
- **ID:** T16
- **Phase ref:** PH04
- **Epic ref:** E05
- **Feature ref:** F17
- **Scenario ref:** F17-S01, F17-S02, F17-S03
- **Title:** Crear sistema de filtros para galería
- **Description:** Implementar filtrado de imágenes por estilo de tatuaje.
- **Objective:** Facilitar la exploración del portafolio.
- **Inputs:** T13
- **Outputs:** assets/js/gallery-filter.js
- **Acceptance Criteria:**
  - Filtros visibles en barra superior
  - Filtro "Todos" activo por defecto
  - Filtrado con animación suave
  - Solo imágenes del estilo seleccionado se muestran
- **Dependencies:** T13
- **Estimated Complexity:** low

#### T17: Implementar Contact Form
- **ID:** T17
- **Phase ref:** PH04
- **Epic ref:** E06
- **Feature ref:** F19
- **Scenario ref:** F19-S01, F19-S02, F19-S03, F19-S04, F19-S05, F19-S06
- **Title:** Implementar formulario con Formspree
- **Description:** Configurar formulario de contacto con validación y envío a Formspree.
- **Objective:** Recibir solicitudes de contacto por email.
- **Inputs:** T14
- **Outputs:** assets/js/contact-form.js + actualización en pages/contacto.html
- **Acceptance Criteria:**
  - Campos: nombre, email, teléfono, mensaje
  - Validación de campos requeridos
  - Validación de formato de email
  - Indicador de carga al enviar
  - Mensaje de éxito tras envío
  - Mensaje de error si falla
  - Formulario se limpia tras envío exitoso
  - Integración con Formspree
- **Dependencies:** T14
- **Estimated Complexity:** medium

#### T18: Implementar WhatsApp Message Builder
- **ID:** T18
- **Phase ref:** PH04
- **Epic ref:** E02
- **Feature ref:** F06
- **Scenario ref:** F06-S02
- **Title:** Crear función de construcción de mensaje WhatsApp
- **Description:** Implementar JavaScript para generar mensaje predefinido dinámico.
- **Objective:** Personalizar mensaje de WhatsApp según contexto.
- **Inputs:** T08
- **Outputs:** assets/js/whatsapp.js
- **Acceptance Criteria:**
  - Mensaje incluye saludo
  - Mensaje incluye contexto del sitio
  - Funciona desde cualquier página
  - Número de WhatsApp configurable
- **Dependencies:** T08
- **Estimated Complexity:** low

---

### Fase 5: Optimization

#### T19: Implementar SEO Meta Tags
- **ID:** T19
- **Phase ref:** PH05
- **Epic ref:** E07
- **Feature ref:** F22
- **Scenario ref:** F22-S01, F22-S02, F22-S03
- **Title:** Agregar meta tags y Open Graph a todas las páginas
- **Description:** Implementar SEO básico en todas las páginas HTML.
- **Objective:** Mejorar posicionamiento en buscadores.
- **Inputs:** T11, T12, T13, T14
- **Outputs:** Meta tags en todas las páginas HTML
- **Acceptance Criteria:**
  - Meta tags: description, keywords, viewport, charset
  - Open Graph: og:title, og:description, og:image, og:url
  - Favicon configurado
  - Títulos únicos por página
- **Dependencies:** T11, T12, T13, T14
- **Estimated Complexity:** low

#### T20: Configurar AOS Animations
- **ID:** T20
- **Phase ref:** PH05
- **Epic ref:** E07
- **Feature ref:** F23
- **Scenario ref:** F23-S01, F23-S02
- **Title:** Implementar animaciones de scroll con AOS
- **Description:** Agregar atributos AOS a elementos clave y configurar comportamiento.
- **Objective:** Animaciones sutiles que mejoren la experiencia.
- **Inputs:** T11, T12, T13, T14
- **Outputs:** Atributos AOS en HTML + configuración JS
- **Acceptance Criteria:**
  - Animaciones fade-up en secciones principales
  - Animaciones no agresivas (duración < 800ms)
  - Deshabilitadas en móvil si afectan rendimiento
  - Funciona con CDN de AOS
- **Dependencies:** T11, T12, T13, T14
- **Estimated Complexity:** low

#### T21: Optimizar Performance
- **ID:** T21
- **Phase ref:** PH05
- **Epic ref:** E07
- **Feature ref:** F24
- **Scenario ref:** F24-S01, F24-S02, F24-S03
- **Title:** Aplicar optimizaciones de rendimiento
- **Description:** Implementar lazy loading, compresión y mejores prácticas.
- **Objective:** Sitio rápido y fluido.
- **Inputs:** T11, T12, T13, T14, T02
- **Outputs:** Optimizaciones aplicadas en HTML/JS
- **Acceptance Criteria:**
  - Lazy loading en imágenes
  - CSS crítico inline
  - JavaScript defer/async
  - Imágenes optimizadas (T02)
- **Dependencies:** T11, T12, T13, T14, T02
- **Estimated Complexity:** low

#### T22: Validar Responsive Design
- **ID:** T22
- **Phase ref:** PH05
- **Epic ref:** E07
- **Feature ref:** F24
- **Scenario ref:** F24-S01, F24-S02, F24-S03
- **Title:** Testing responsive en múltiples breakpoints
- **Description:** Verificar comportamiento en móvil, tablet y desktop.
- **Objective:** Experiencia consistente en todos los dispositivos.
- **Inputs:** T11, T12, T13, T14
- **Outputs:** Correcciones responsive aplicadas
- **Acceptance Criteria:**
  - Móvil (320px-480px): todo visible, sin desbordes
  - Tablet (768px-1024px): layout adaptable
  - Desktop (>1024px): diseño completo
  - Botones tocables mín. 44px en móvil
- **Dependencies:** T11, T12, T13, T14
- **Estimated Complexity:** low

---

### Fase 6: Release Preparation

#### T23: Crear README.md
- **ID:** T23
- **Phase ref:** PH06
- **Epic ref:** E07
- **Feature ref:** F25
- **Scenario ref:** F25-S01
- **Title:** Documentar proyecto con README
- **Description:** Crear archivo README completo con descripción, instalación y mantenimiento.
- **Objective:** Documentación para el tatuador.
- **Inputs:** Todos los archivos del proyecto
- **Outputs:** README.md
- **Acceptance Criteria:**
  - Descripción del proyecto
  - Instrucciones de instalación local
  - Guía de mantenimiento (cambiar fotos, actualizar precios)
  - Estructura de directorios
  - Tecnologías utilizadas
- **Dependencies:** Todas las tareas anteriores
- **Estimated Complexity:** low

#### T24: Crear CHANGELOG.md
- **ID:** T24
- **Phase ref:** PH06
- **Epic ref:** E07
- **Feature ref:** F25
- **Scenario ref:** F25-S02
- **Title:** Documentar cambios con CHANGELOG
- **Description:** Crear archivo de registro de cambios.
- **Objective:** Historial de versiones.
- **Inputs:** Todos los cambios realizados
- **Outputs:** CHANGELOG.md
- **Acceptance Criteria:**
  - Versión inicial 1.0.0
  - Fecha de creación
  - Lista de funcionalidades incluidas
- **Dependencies:** Todas las tareas anteriores
- **Estimated Complexity:** low

#### T25: Validar HTML
- **ID:** T25
- **Phase ref:** PH06
- **Epic ref:** E07
- **Feature ref:** F25
- **Scenario ref:** F25-S01
- **Title:** Validar HTML de todas las páginas
- **Description:** Verificar que el HTML cumple estándares W3C.
- **Objective:** Código limpio y válido.
- **Inputs:** T11, T12, T13, T14
- **Outputs:** HTML validado
- **Acceptance Criteria:**
  - HTML válido según W3C
  - Sin errores de sintaxis
  - Tags bien cerrados
  - Atributos válidos
- **Dependencies:** T11, T12, T13, T14
- **Estimated Complexity:** low

#### T26: Configurar GitHub Pages
- **ID:** T26
- **Phase ref:** PH06
- **Epic ref:** E07
- **Feature ref:** F26
- **Scenario ref:** F26-S01, F26-S02
- **Title:** Configurar y desplegar en GitHub Pages
- **Description:** Configurar repositorio GitHub y activar GitHub Pages.
- **Objective:** Sitio accesible públicamente.
- **Inputs:** Todo el proyecto
- **Outputs:** Sitio desplegado en GitHub Pages
- **Acceptance Criteria:**
  - Repositorio creado en GitHub
  - GitHub Pages activado
  - HTTPS habilitado
  - Todas las páginas accesibles
  - Imágenes cargan correctamente
  - Formulario funciona
- **Dependencies:** T23, T24, T25
- **Estimated Complexity:** low

---

## Grafo de Dependencias

```
T01 (Estructura)
├── T02 (Optimizar imágenes)
│   └── T13 (Página Galería) ──→ T15 (Lightbox) ──→ T16 (Filtros)
├── T03 (Config Tailwind)
├── T04 (Estilos CSS)
└── T05 (Template HTML)
    ├── T06 (Navbar)
    │   ├── T11 (Home) ──→ T19, T20, T21, T22
    │   ├── T12 (Servicios) ──→ T19, T20, T21, T22
    │   ├── T13 (Galería) ──→ T19, T20, T21, T22
    │   └── T14 (Contacto) ──→ T17 (Form) ──→ T19, T20, T21, T22
    ├── T07 (Footer)
    ├── T08 (WhatsApp Button) ──→ T18 (WhatsApp Message)
    ├── T09 (Page Header)
    └── T10 (CTA Section)

Fase 6 (después de Fase 5):
T19, T20, T21, T22 ──→ T23 (README) ──→ T26 (Deploy)
                   ──→ T24 (CHANGELOG) ──→ T26
                   ──→ T25 (Validar HTML) ──→ T26
```

---

## Decision Log

| # | Decisión | Justificación | Impacto |
|---|----------|---------------|---------|
| D01 | Usar HTML snippets en vez de templates dinámicos | Stack estático no permite include/extend | Requiere duplicar navbar/footer en cada página |
| D02 | Optimizar imágenes antes de crear páginas | Mejor performance desde el inicio | T02 debe ejecutarse antes de T13 |
| D03 | Crear componentes como snippets reutilizables | Facilita mantenimiento sin build tools | Cada página incluye los snippets manualmente |
| D04 | Usar CDN para todas las dependencias | Sin build step, CDN es la opción más simple | Dependencia de conexión a internet |
| D05 | Formulario con Formspree (no backend) | Cumple requisito de sitio estático | Requiere configuración de Formspree |

---

## Criterios de Éxito Globales

- [ ] Las 4 páginas cargan correctamente
- [ ] El diseño es responsive en móvil, tablet y desktop
- [ ] El formulario de contacto envía mensajes a Formspree
- [ ] El botón de WhatsApp abre聊天 con mensaje predefinido
- [ ] Las imágenes de galería se muestran con lazy loading
- [ ] El lightbox funciona con navegación por teclado
- [ ] Los filtros de galería funcionan correctamente
- [ ] El sitio tiene SEO básico (meta tags, Open Graph)
- [ ] El sitio está desplegado en GitHub Pages con HTTPS
- [ ] Existe documentación completa (README, CHANGELOG)
