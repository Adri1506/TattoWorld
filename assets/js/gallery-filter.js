/**
 * Gallery Filter Component
 * TattoWorld - Tatuajes a Domicilio
 * 
 * Sistema de filtros para la galería de imágenes.
 */

class GalleryFilter {
  constructor() {
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.galleryItems = document.querySelectorAll('.gallery-item');
    this.emptyState = document.getElementById('empty-state');
    
    this.init();
  }
  
  init() {
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => this.filter(btn));
    });
  }
  
  filter(activeBtn) {
    // Update button styles
    this.filterBtns.forEach(btn => {
      btn.classList.remove('bg-accent', 'text-background');
      btn.classList.add('bg-surface', 'text-text-secondary', 'border', 'border-border');
    });
    
    activeBtn.classList.add('bg-accent', 'text-background');
    activeBtn.classList.remove('bg-surface', 'text-text-secondary', 'border', 'border-border');
    
    // Filter items
    const filter = activeBtn.dataset.filter;
    let visibleCount = 0;
    
    this.galleryItems.forEach(item => {
      const shouldShow = filter === 'all' || item.dataset.category === filter;
      item.style.display = shouldShow ? 'block' : 'none';
      if (shouldShow) visibleCount++;
    });
    
    // Show/hide empty state
    if (this.emptyState) {
      this.emptyState.classList.toggle('hidden', visibleCount > 0);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.galleryFilter = new GalleryFilter();
});
