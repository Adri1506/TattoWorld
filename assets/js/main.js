/**
 * Main JavaScript Module
 * TattoWorld - Tatuajes a Domicilio
 * 
 * Funcionalidades principales del sitio.
 */

// ========================================
// Navbar Scroll Effect
// ========================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-surface/95', 'backdrop-blur-md', 'shadow-lg');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-surface/95', 'backdrop-blur-md', 'shadow-lg');
      navbar.classList.add('bg-transparent');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (!menuBtn || !menu) return;
  
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('hidden');
    
    // Update icon
    const icon = menuBtn.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', isExpanded ? 'menu' : 'x');
      lucide.createIcons();
    }
  });
  
  // Close menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      }
    });
  });
}

// ========================================
// Active Navigation Link
// ========================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('text-accent');
      link.classList.remove('text-text-secondary');
    }
  });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========================================
// Lazy Loading Images
// ========================================
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.src = img.src; // Force load
    });
  } else {
    // Fallback for browsers without native lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }
}

// ========================================
// Current Year in Footer
// ========================================
function setFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  initNavbarScroll();
  initMobileMenu();
  setActiveNavLink();
  initSmoothScroll();
  initLazyLoading();
  setFooterYear();
  
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }
});

// Export for use in other modules
window.TattoWorld = {
  initNavbarScroll,
  initMobileMenu,
  setActiveNavLink,
  initSmoothScroll,
  initLazyLoading,
  setFooterYear
};
