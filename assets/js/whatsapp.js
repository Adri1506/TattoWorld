/**
 * WhatsApp Integration Module
 * TattoWorld - Tatuajes a Domicilio
 * 
 * Funciones para integración con WhatsApp.
 * Usa la configuración centralizada de SiteConfig.
 */

const WhatsApp = {
  /**
   * Generate WhatsApp URL with context
   * @param {string} context - Page context (home, servicios, galeria, contacto)
   * @param {Object} params - Additional parameters
   * @returns {string} WhatsApp URL
   */
  getUrl(context = 'home', params = {}) {
    const config = window.SiteConfig?.contact?.whatsapp || {
      get url() { return 'https://wa.me/56912345678'; },
      defaultMessage: 'Hola TattoWorld, me gustaría agendar una cita para un tatuaje.',
      contexts: {
        home: 'Hola TattoWorld, me gustaría agendar una cita para un tatuaje.',
        servicios: 'Hola TattoWorld, me interesa un servicio de tatuaje, ¿podrían darme más información?',
        galeria: 'Hola TattoWorld, vi su galería y me encantó un diseño, ¿cómo puedo agendar?',
        contacto: 'Hola TattoWorld, me gustaría contactarlos para agendar una cita.'
      }
    };

    let message = config.contexts[context] || config.defaultMessage;
    
    // Add custom parameters to message
    if (params.service) {
      message += ` Estoy interesado en el servicio de ${params.service}.`;
    }
    if (params.style) {
      message += ` Me gusta el estilo ${params.style}.`;
    }
    
    return `${config.url}?text=${encodeURIComponent(message)}`;
  },
  
  /**
   * Open WhatsApp in new tab
   * @param {string} context - Page context
   * @param {Object} params - Additional parameters
   */
  open(context = 'home', params = {}) {
    const url = this.getUrl(context, params);
    window.open(url, '_blank', 'noopener,noreferrer');
  },
  
  /**
   * Initialize WhatsApp buttons on page
   */
  init() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let context = 'home';
    
    if (currentPage.includes('servicios')) context = 'servicios';
    else if (currentPage.includes('galeria')) context = 'galeria';
    else if (currentPage.includes('contacto')) context = 'contacto';
    
    // Update all WhatsApp links on page
    document.querySelectorAll('a[href*="wa.me"], #whatsapp-link, #cta-whatsapp-link, #contacto-whatsapp-btn, #galeria-whatsapp-cta, #servicios-whatsapp-cta').forEach(link => {
      link.href = this.getUrl(context);
    });

    // Update phone links
    const phone = window.SiteConfig?.contact?.phoneInternational || '+56912345678';
    const phoneFormatted = window.SiteConfig?.contact?.phoneFormatted || '+56 9 1234 5678';
    document.querySelectorAll('a[href*="tel:"], #footer-phone, #contacto-phone, #servicios-phone').forEach(link => {
      link.href = `tel:${phone}`;
      if (link.textContent.includes('1234')) {
        link.textContent = phoneFormatted;
      }
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  WhatsApp.init();
});
