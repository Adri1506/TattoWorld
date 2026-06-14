# Design Document: TattoWorld

**Proyecto:** TattoWorld - Web Estática de Tatuajes a Domicilio
**Diseñador:** UX/UI Designer Agent v1.2.0
**Fecha:** 14 de junio de 2026
**Estado:** READY_FOR_NEXT

---

## 1. Project Overview

TattoWorld es un sitio web estático diseñado para un tatuador independiente que ofrece servicios de tatuajes a domicilio en Chile/Latam. El diseño prioriza una estética moderna, oscura y profesional que refleje la cultura del tatuaje, con énfasis en la galería de trabajos y facilidad de contacto.

---

## 2. User Flows

### Flow 01: Navegación General

| Paso | Acción | Pantalla |
|------|--------|----------|
| 1 | Usuario llega al sitio | Home (index.html) |
| 2 | Explora servicios | Home → Servicios |
| 3 | Ve trabajos realizados | Home → Galería |
| 4 | Contacta al tatuador | Cualquier página → Contacto |

### Flow 02: Contacto Directo

| Paso | Acción | Pantalla |
|------|--------|----------|
| 1 | Usuario ve CTA en página | Cualquier página |
| 2 | Hace clic en "WhatsApp" | Redirige a WhatsApp Web/App |
| 3 | Envía mensaje con información | WhatsApp |

### Flow 03: Solicitud de Cita

| Paso | Acción | Pantalla |
|------|--------|----------|
| 1 | Usuario visita Contacto | Contacto |
| 2 | Llena formulario de contacto | Formulario |
| 3 | Envía formulario (Formspree) | Confirmación |
| 4 | Recibe respuesta por email/WhatsApp | Email/WhatsApp |

### Flow 04: Exploración de Galería

| Paso | Acción | Pantalla |
|------|--------|----------|
| 1 | Usuario ingresa a Galería | Galería |
| 2 | Filtra por estilo (opcional) | Galería |
| 3 | Selecciona imagen | Lightbox |
| 4 | Navega entre imágenes | Lightbox |

---

## 3. Screens Inventory

| ID | Nombre | Archivo | Objetivo Principal |
|----|--------|---------|-------------------|
| screen_001 | Home | index.html | Presentar servicios y captar clientes |
| screen_002 | Servicios | servicios.html | Detallar servicios y precios |
| screen_003 | Galería | galeria.html | Mostrar portafolio de trabajos |
| screen_004 | Contacto | contacto.html | Facilitar contacto y reservas |

---

## 4. Wireframes

### Screen 001: Home (index.html)

**Objetivo:** Presentar el servicio, generar confianza y dirigir al contacto.

**Layout General:**
```
┌─────────────────────────────────────┐
│           NAVBAR (fija)             │
├─────────────────────────────────────┤
│                                     │
│           HERO SECTION              │
│    (imagen + título + CTA)          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       SERVICIOS RESUMEN             │
│    (3-4 cards de servicios)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       GALERÍA PREVIEW               │
│    (4-6 fotos destacadas)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       CÓMO FUNCIONA                 │
│    (3 pasos del proceso)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       CTA FINAL                     │
│    (Llamada a acción WhatsApp)      │
│                                     │
├─────────────────────────────────────┤
│           FOOTER                    │
└─────────────────────────────────────┘
```

**Elementos Principales:**
- **comp_navbar:** Navegación fija, logo izquierda, links centro, WhatsApp derecha
- **comp_hero:** Imagen de fondo con overlay oscuro, título principal, subtítulo, botón CTA
- **comp_service_card:** Card con icono Lucide, título, descripción breve
- **comp_gallery_grid:** Grid 2-3 columnas de miniaturas
- **comp_how_it_works:** 3 pasos con iconos y numeración
- **comp_cta_section:** Fondo acento, texto persuasivo, botón WhatsApp
- **comp_footer:** Redes sociales, copyright, links rápidos

**Estados:**
- default: Layout completo con contenido
- loading: Skeleton de cards mientras carga
- empty: No aplica (contenido estático)

**Notas de Interacción:**
- Navbar cambia a fondo sólido al hacer scroll
- Hero con efecto parallax sutil
- Cards de servicios con hover effect (elevación + sombra)
- Galería con transiciones suaves entre imágenes

---

### Screen 002: Servicios (servicios.html)

**Objetivo:** Detallar servicios, precios y zona de cobertura.

**Layout General:**
```
┌─────────────────────────────────────┐
│           NAVBAR (fija)             │
├─────────────────────────────────────┤
│                                     │
│       HEADER DE PÁGINA              │
│    (Título + breadcrumb)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       LISTA DE SERVICIOS            │
│    (Detalle con descripciones)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       PRECIOS / PRESUPUESTO         │
│    (Rangos o "Solicita tu precio")  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       ZONA DE COBERTURA             │
│    (Mapa o lista de comunas)        │
│                                     │
├─────────────────────────────────────┤
│       CTA                           │
├─────────────────────────────────────┤
│           FOOTER                    │
└─────────────────────────────────────┘
```

**Elementos Principales:**
- **comp_page_header:** Título de página con fondo oscuro
- **comp_service_detail:** Card expandida con imagen, título, descripción, características
- **comp_pricing_section:** Tabla de precios o CTA "Solicita tu presupuesto"
- **comp_coverage_map:** Mapa estático o lista de comunas/zonas
- **comp_service_cta:** Botón grande para contacto

**Estados:**
- default: Lista completa de servicios
- loading: Skeleton de cards
- empty: No aplica

**Notas de Interacción:**
- Cards de servicios con acordeón en móvil
- Hover en cards muestra más detalles
- Botón de WhatsApp fijo en esquina inferior derecha

---

### Screen 003: Galería (galeria.html)

**Objetivo:** Mostrar portafolio de trabajos con posibilidad de filtrado.

**Layout General:**
```
┌─────────────────────────────────────┐
│           NAVBAR (fija)             │
├─────────────────────────────────────┤
│                                     │
│       HEADER DE PÁGINA              │
│    (Título + filtros)               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       GRID DE IMÁGENES              │
│    (Masonry o grid responsivo)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       CTA FINAL                     │
│    ("¿Te gusta? Contáctanos")       │
│                                     │
├─────────────────────────────────────┤
│           FOOTER                    │
└─────────────────────────────────────┘
```

**Elementos Principales:**
- **comp_filter_bar:** Botones de filtro por estilo (Realismo, Fine Line, Blackwork, etc.)
- **comp_gallery_grid:** Grid de imágenes con hover overlay
- **comp_lightbox:** Modal para vista ampliada de imagen
- **comp_gallery_cta:** Llamada a acción al final

**Estados:**
- default: Grid completo de imágenes
- loading: Skeleton de imágenes
- empty: "Próximamente nuevos trabajos"

**Notas de Interacción:**
- Filtros animan el grid (AOS)
- Click en imagen abre lightbox
- Lightbox permite navegar con flechas
- Close con click en X o tecla ESC

---

### Screen 004: Contacto (contacto.html)

**Objetivo:** Facilitar el contacto directo y la reserva de citas.

**Layout General:**
```
┌─────────────────────────────────────┐
│           NAVBAR (fija)             │
├─────────────────────────────────────┤
│                                     │
│       HEADER DE PÁGINA              │
│    (Título)                         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   ┌───────────┬───────────────────┐ │
│   │ FORMULARIO│   WHATSAPP + INFO │ │
│   │           │                   │ │
│   └───────────┴───────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│           FOOTER                    │
└─────────────────────────────────────┘
```

**Elementos Principales:**
- **comp_contact_form:** Formulario con campos: nombre, email, teléfono, mensaje, tipo de tatuaje
- **comp_whatsapp_card:** Botón grande de WhatsApp con mensaje predefinido
- **comp_contact_info:** Horarios, zona de cobertura, redes sociales
- **comp_map_section:** Mapa estático de ubicación (opcional)

**Estados:**
- default: Formulario listo para llenar
- loading: Spinner en botón de envío
- success: Mensaje de confirmación
- error: Mensaje de error con retry

**Notas de Interacción:**
- Validación en tiempo real de campos
- Botón WhatsApp abre en nueva pestaña
- Formulario envía a Formspree
- Mensaje de éxito/error inline

---

## 5. Design System

### 5.1 Paleta de Colores

| Token | Valor | Uso |
|-------|-------|-----|
| primary | #1a1a1a | Fondos principales, navbar |
| secondary | #2d2d2d | Cards, secciones alternas |
| accent | #c9a227 | Botones, links, hover, highlights |
| accent-hover | #b8912a | Estado hover del acento |
| background | #0d0d0d | Fondo global |
| surface | #1e1e1e | Superficies elevadas |
| text-primary | #ffffff | Texto principal |
| text-secondary | #a3a3a3 | Texto secundario, subtítulos |
| text-muted | #666666 | Texto de soporte |
| border | #333333 | Bordes y divisores |
| success | #22c55e | Estados de éxito |
| error | #ef4444 | Estados de error |
| warning | #f59e0b | Estados de warning |

### 5.2 Tipografía

| Token | Fuente | Tamaño | Peso | Uso |
|-------|--------|--------|------|-----|
| heading-1 | Inter | 48px (mobile: 32px) | 700 | Títulos principales |
| heading-2 | Inter | 36px (mobile: 28px) | 700 | Subtítulos de sección |
| heading-3 | Inter | 24px (mobile: 20px) | 600 | Títulos de card |
| body | Inter | 16px | 400 | Texto principal |
| body-small | Inter | 14px | 400 | Texto de soporte |
| caption | Inter | 12px | 400 | Notas, pie de foto |
| nav-link | Inter | 14px | 500 | Links de navegación |

**Fuente Principal:** Inter (Google Fonts)
**Justificación:** Moderna, legible, excelente soporte para español, gratuita

### 5.3 Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| space-xs | 4px | Margen interno pequeño |
| space-sm | 8px | Margen interno |
| space-md | 16px | Espaciado estándar |
| space-lg | 24px | Secciones |
| space-xl | 32px | Entre secciones |
| space-2xl | 48px | Margen de página |
| space-3xl | 64px | Separación grande |

### 5.4 Iconografía

**Set:** Lucide Icons (CDN)
**Tamaño base:** 24px
**Colores:** Hereda del contexto (text-primary o accent)

**Iconos Principales:**
- phone, whatsapp, instagram, mail (contacto)
- menu, x (navegación)
- image, camera, filter (galería)
- map-pin, clock, dollar-sign (servicios)
- arrow-right, chevron-right (navegación)
- heart, star (testimonios)

### 5.5 Componentes Base

#### comp_button

| ID | Tipo | Variantes | Estados |
|----|------|-----------|---------|
| comp_button | Botón | primary, secondary, ghost, whatsapp | default, hover, active, disabled |

**Descripción:**
- **primary:** Fondo accent (#c9a227), texto negro, border-radius 8px
- **secondary:** Fondo transparente, borde accent, texto accent
- **ghost:** Fondo transparente, texto accent, sin borde
- **whatsapp:** Fondo #25d366, texto blanco, con icono WhatsApp

#### comp_card

| ID | Tipo | Variantes | Estados |
|----|------|-----------|---------|
| comp_card | Card | default, service, gallery | default, hover |

**Descripción:**
- Fondo surface (#1e1e1e)
- Border-radius 12px
- Padding 24px
- Sombra sutil
- Hover: elevación + cambio de sombra

#### comp_input

| ID | Tipo | Variantes | Estados |
|----|------|-----------|---------|
| comp_input | Input | text, email, tel, textarea | default, focus, error, disabled |

**Descripción:**
- Fondo primary (#1a1a1a)
- Borde border (#333333)
- Border-radius 8px
- Padding 12px 16px
- Focus: borde accent

#### comp_navbar

| ID | Tipo | Variantes | Estados |
|----|------|-----------|---------|
| comp_navbar | Navegación | fixed, scrolled | default, scrolled |

**Descripción:**
- Posición fija arriba
- Transparente en home, sólida al scroll
- Logo izquierda, links centro, CTA derecha
- Responsive: hamburger en móvil

#### comp_footer

| ID | Tipo | Variantes | Estados |
|----|------|-----------|---------|
| comp_footer | Footer | default | default |

**Descripción:**
- Fondo primary
- 3 columnas: Info, Links, Redes
- Copyright abajo
- Responsive: stack en móvil

#### comp_modal_lightbox

| ID | Tipo | Variantes | Estados |
|----|------|-----------|---------|
| comp_modal_lightbox | Modal | gallery | default, open |

**Descripción:**
- Fondo negro 90% opacidad
- Imagen centrada
- Botón cerrar arriba derecha
- Flechas navegación izquierda/derecha

---

## 6. UI Component Library

### Librería Recomendada

| Componente | Librería | Justificación |
|------------|----------|---------------|
| Framework CSS | Tailwind CSS (CDN) | Stack definido, desarrollo rápido |
| Iconos | Lucide Icons (CDN) | Ligero, moderno, SVG nativo |
| Animaciones | AOS (CDN) | Efectos de scroll ligeros |
| Fuentes | Google Fonts | Inter, gratuita, de calidad |
| Formularios | Formspree | Backend gratuito para estáticos |

### Componentes Custom Requeridos

| Componente | Descripción | Complejidad |
|------------|-------------|-------------|
| Lightbox Gallery | Modal de imagen con navegación | Media |
| Filter Gallery | Grid con filtros animados | Baja |
| WhatsApp Button | Botón flotante con enlace | Baja |
| Navbar Scroll | Navbar con cambio de fondo | Baja |
| Contact Form | Formulario con validación | Baja |

---

## 7. Responsive Behavior

### Breakpoints

| Breakpoint | Ancho | Uso |
|------------|-------|-----|
| mobile | < 640px | Teléfonos |
| tablet | 640px - 1024px | Tablets |
| desktop | > 1024px | Escritorio |

### Comportamiento por Componente

| Componente | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| Navbar | Hamburger menu | Links visibles | Links + CTA |
| Hero | Full width, texto centrado | Full width, texto centrado | Full width, texto centrado |
| Service Cards | Stack vertical | 2 columnas | 3-4 columnas |
| Gallery Grid | 1-2 columnas | 2-3 columnas | 3-4 columnas |
| Contact Form | Stack vertical | 2 columnas | 2 columnas |
| Footer | Stack vertical | 2 columnas | 3 columnas |

---

## 8. UI States

### Estados Globales

| Estado | Descripción | Implementación |
|--------|-------------|----------------|
| Loading | Contenido cargando | Skeleton screens |
| Empty | Sin contenido | Mensaje ilustrado |
| Error | Error de carga | Mensaje + retry |
| Success | Operación exitosa | Mensaje de confirmación |

### Estados por Pantalla

| Pantalla | Loading | Empty | Error | Success |
|----------|---------|-------|-------|---------|
| Home | Skeleton cards | No aplica | Mensaje error | No aplica |
| Servicios | Skeleton cards | No aplica | Mensaje error | No aplica |
| Galería | Skeleton grid | "Próximamente" | Mensaje error | No aplica |
| Contacto | Spinner botón | No aplica | Mensaje error | "¡Mensaje enviado!" |

---

## 9. Image Recommendations

### Tipos de Imágenes Requeridas

| Tipo | Cantidad | Dimensiones | Formato | Descripción |
|------|----------|-------------|---------|-------------|
| Hero | 1 | 1920x1080px | WebP/PNG | Trabajo de tatuaje impactante |
| Gallery | 6-12 | 800x800px (mín) | WebP/PNG | Fotos de trabajos realizados |
| Services | 3-4 | 600x400px | WebP/PNG | Ilustraciones de servicios |
| Logo | 1 | SVG | SVG | Logo del sitio |

### Especificaciones Técnicas

| Parámetro | Valor |
|-----------|-------|
| Formato preferido | WebP (con fallback PNG) |
| Compresión | Máxima sin pérdida visible de calidad |
| Peso máximo por imagen | 200KB (gallery), 500KB (hero) |
| Optimización | Usar Squoosh o similar |
| Lazy loading | Sí, para todas las imágenes excepto hero |

### Contenido Visual

| Categoría | Descripción | Ejemplo |
|-----------|-------------|---------|
| Trabajos realizados | Fotos de tatuajes terminados | foto1-6.png existentes |
| Proceso | Fotos del proceso de tatuaje | Opcional |
| Zona de trabajo | Fotos del espacio/móvil | Opcional |
| Testimonios | Fotos de clientes satisfechos | Opcional |

---

## 10. Assumptions

| ID | Supuesto | Impacto |
|----|----------|---------|
| DA01 | El usuario validó el estilo visual propuesto (oscuro + dorado) | Si no, cambiar paleta |
| DA02 | Las fotos en evidencias/ son adecuadas para la galería | Si no, se necesitan más fotos |
| DA03 | El usuario tiene logo o se creará uno simple | Si no, usar texto como logo |
| DA04 | WhatsApp Business está configurado | Si no, usar WhatsApp personal |
| DA05 | Formspree está configurado para recibir emails | Si no, usar solo WhatsApp |
| DA06 | El usuario quiere mostrar precios | Si no, ocultar sección de precios |

---

## 11. Constraints

| ID | Restricción | Tipo |
|----|-------------|------|
| DC01 | Stack tecnológico no modificable (Tailwind CDN, AOS, Lucide) | Técnica |
| DC02 | Máximo 4 páginas principales | Técnica |
| DC03 | Contenido en español (Chile/Latam) | Contenido |
| DC04 | Diseño mobile-first obligatorio | Técnica |
| DC05 | Formulario simple (máximo 5 campos) | UX |
| DC06 | Botón WhatsApp siempre visible | UX |

---

## 12. Decision Log

### Selection Process

**Step 1: Análisis de Referencias Visuales**
- Resultado: Las 3 referencias muestran temas oscuros con acentos metálicos/rojos
- Decisión: Adoptar estética oscura moderna

**Step 2: Validación de Estilo Visual**
- Referencias analizadas: almatattoo.com, tattoorockers.cl, blacktatuajes.cl
- Patrones comunes: Fondos negros, tipografía moderna, acentos dorados/rojos
- Decisión: Tema oscuro con acento dorado (#c9a227)

**Step 3: Definición de Paleta de Colores**
- Opción A: Negro + Dorado (elegida)
- Opción B: Negro + Rojo
- Opción C: Gris oscuro + Plateado
- Justificación: Dorado transmite exclusividad y profesionalismo

**Step 4: Selección de Tipografía**
- Candidatas: Inter, Poppins, Montserrat
- Seleccionada: Inter
- Justificación: Excelente legibilidad, moderna, gratuita en Google Fonts

**Step 5: Definición de Componentes**
- Componentes base: button, card, input, navbar, footer, lightbox
- Librería UI: Tailwind CSS (CDN) + componentes custom
- Justificación: Stack ya definido, Tailwind permite personalización rápida

**Step 6: Cálculo de Complejidad**
- Screens: 4
- Components: 12
- Flows: 4
- Complejidad: LOW

### Decisions

| Decision | Justificación | Impacto |
|----------|---------------|---------|
| Tema oscuro con acento dorado | Consistente con industria del tatuaje, profesional | Positivo: identidad visual fuerte |
| Inter como tipografía | Legibilidad, modernidad, soporte español | Positivo: experiencia de lectura óptima |
| Lightbox para galería | Estándar de la industria, UX familiar | Positivo: interacción intuitiva |
| WhatsApp flotante | Contacto inmediato, preferencia regional | Positivo: reduce fricción de contacto |
| Formulario simple | Evita abandono, info esencial | Positivo: mayor tasa de conversión |
| AOS para animaciones | Efectos sutiles sin sobrecarga | Positivo: mejor UX visual |

---

**FIN DEL DOCUMENTO DE DISEÑO**
