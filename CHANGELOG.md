# Changelog

Todas las notables cambios a este proyecto serán documentadas en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/),
y este proyecto adhere a [Semantic Versioning](https://semver.org/lang/es/spec/v2.0.0.html).

## [1.0.0] - 2026-06-14

### Agregado

#### Estructura del Proyecto
- Creación de estructura de directorios completa
- Configuración de Tailwind CSS con design tokens
- Estilos globales CSS con variables del design system
- Plantilla base HTML con todas las dependencias CDN

#### Componentes Compartidos
- Navbar responsive con menú hamburguesa para móvil
- Footer con información de contacto y redes sociales
- Botón flotante de WhatsApp con mensaje predefinido
- Page Header reutilizable para páginas internas
- CTA Section con llamadas a la acción

#### Páginas Principales
- **Home (index.html)**: Hero section, servicios preview, galería preview, proceso de trabajo
- **Servicios**: Detalle de servicios, tabla de precios, zona de cobertura
- **Galería**: Grid de imágenes, filtros por estilo, lightbox modal
- **Contacto**: Formulario con validación, información de contacto, WhatsApp card

#### Funcionalidades Avanzadas
- Lightbox modal con navegación por teclado
- Sistema de filtros para galería
- Formulario de contacto con validación en tiempo real
- Integración con Formspree para envío de emails
- Mensajes predefinidos de WhatsApp por contexto

#### Optimización
- SEO: Meta tags, Open Graph, Schema.org
- AOS: Animaciones de scroll suaves
- Lazy loading en imágenes
- Imágenes optimizadas en formato WebP

#### Documentación
- README.md con instrucciones de uso
- CHANGELOG.md con historial de cambios
- Comentarios en código JavaScript

### Técnicas

- Mobile-first responsive design
- Tema oscuro con acentos dorados (#c9a227)
- Tailwind CSS para estilos utility-first
- JavaScript vanilla ES2024
- Lucide Icons para iconografía
- Formspree para formularios
- AOS para animaciones

### pendiente

- Optimización de imágenes con Squoosh (requiere acción manual)
- Configuración de GitHub Pages
- Pruebas de rendimiento
- Validación W3C completa
