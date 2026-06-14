/**
 * Lightbox Component
 * TattoWorld - Tatuajes a Domicilio
 * 
 * Modal para vista ampliada de imágenes con navegación.
 */

class Lightbox {
  constructor() {
    this.lightbox = document.getElementById('lightbox');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxTitle = document.getElementById('lightbox-title');
    this.lightboxCategory = document.getElementById('lightbox-category');
    this.lightboxClose = document.getElementById('lightbox-close');
    this.lightboxPrev = document.getElementById('lightbox-prev');
    this.lightboxNext = document.getElementById('lightbox-next');
    
    this.currentIndex = 0;
    this.items = [];
    
    this.init();
  }
  
  init() {
    if (!this.lightbox) return;
    
    // Event listeners
    this.lightboxClose?.addEventListener('click', () => this.close());
    this.lightboxPrev?.addEventListener('click', () => this.navigate(-1));
    this.lightboxNext?.addEventListener('click', () => this.navigate(1));
    
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) this.close();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (this.lightbox.classList.contains('hidden')) return;
      
      switch (e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.navigate(-1);
          break;
        case 'ArrowRight':
          this.navigate(1);
          break;
      }
    });
  }
  
  open(index) {
    this.items = Array.from(document.querySelectorAll('.gallery-item'))
      .filter(item => item.style.display !== 'none');
    
    this.currentIndex = index;
    this.updateContent();
    this.lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    this.lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  navigate(direction) {
    this.currentIndex = (this.currentIndex + direction + this.items.length) % this.items.length;
    this.updateContent();
  }
  
  updateContent() {
    const item = this.items[this.currentIndex];
    if (!item) return;
    
    const img = item.querySelector('img');
    const title = item.querySelector('h3')?.textContent || '';
    const category = item.querySelector('.text-accent')?.textContent || '';
    
    if (this.lightboxImg) {
      this.lightboxImg.src = img?.src || '';
      this.lightboxImg.alt = img?.alt || '';
    }
    if (this.lightboxTitle) this.lightboxTitle.textContent = title;
    if (this.lightboxCategory) this.lightboxCategory.textContent = category;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.lightbox = new Lightbox();
});
