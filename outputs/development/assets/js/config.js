/**
 * Configuración Centralizada - TattoWorld
 * 
 * Este archivo contiene todas las configuraciones del sitio.
 * Modificar este archivo actualiza los valores en todo el sitio.
 */

const SiteConfig = {
  // Información de contacto
  contact: {
    phone: '56912345678',
    phoneFormatted: '+56 9 1234 5678',
    phoneInternational: '+56912345678',
    email: 'contacto@tattoworld.cl',
    whatsapp: {
      get url() {
        return `https://wa.me/${SiteConfig.contact.phone}`;
      },
      defaultMessage: 'Hola TattoWorld, me gustaría agendar una cita para un tatuaje.',
      contexts: {
        home: 'Hola TattoWorld, me gustaría agendar una cita para un tatuaje.',
        servicios: 'Hola TattoWorld, me interesa un servicio de tatuaje, ¿podrían darme más información?',
        galeria: 'Hola TattoWorld, vi su galería y me encantó un diseño, ¿cómo puedo agendar?',
        contacto: 'Hola TattoWorld, me gustaría contactarlos para agendar una cita.'
      }
    }
  },

  // URLs del sitio
  urls: {
    base: 'https://tattoworld.github.io',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/'
  },

  // Información del negocio
  business: {
    name: 'TattoWorld',
    description: 'Tatuajes a domicilio en Santiago, Chile',
    address: {
      city: 'Santiago',
      region: 'RM',
      country: 'CL'
    },
    priceRange: '$$'
  },

  // Meta tags para SEO
  seo: {
    title: 'TattoWorld - Tatuajes a Domicilio | Arte en tu Hogar',
    description: 'Tatuajes profesionales a domicilio en Santiago, Chile. Blackwork, realismo, tradicional, fine line y más. Higiene garantizada y arte de calidad.',
    keywords: 'tatuajes, tatuajes a domicilio, tatuador, blackwork, realismo, tradicional, fine line, punk, Santiago, Chile',
    author: 'TattoWorld'
  }
};

// Hacer disponible globalmente
if (typeof window !== 'undefined') {
  window.SiteConfig = SiteConfig;
}
