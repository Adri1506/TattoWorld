/**
 * Gallery Data Module
 * TattoWorld - Tatuajes a Domicilio
 * 
 * Este archivo contiene los datos de las imágenes de la galería.
 * Las imágenes deben ser optimizadas con Squoosh antes de usar en producción.
 */

const galleryData = [
  {
    id: 1,
    src: 'assets/img/gallery/tattoo-1.webp',
    thumbnail: 'assets/img/gallery/tattoo-1-thumb.webp',
    alt: 'Tatuaje estilo blackwork - Diseño geométrico',
    category: 'blackwork',
    title: 'Diseño Geométrico Blackwork'
  },
  {
    id: 2,
    src: 'assets/img/gallery/tattoo-2.webp',
    thumbnail: 'assets/img/gallery/tattoo-2-thumb.webp',
    alt: 'Tatuaje estilo realista - Retrato',
    category: 'realismo',
    title: 'Retrato Realista'
  },
  {
    id: 3,
    src: 'assets/img/gallery/tattoo-3.webp',
    thumbnail: 'assets/img/gallery/tattoo-3-thumb.webp',
    alt: 'Tatuaje estilo tradicional - Rosa',
    category: 'tradicional',
    title: 'Rosa Tradicional'
  },
  {
    id: 4,
    src: 'assets/img/gallery/tattoo-4.webp',
    thumbnail: 'assets/img/gallery/tattoo-4-thumb.webp',
    alt: 'Tatuaje estilo fine line - Flor',
    category: 'fine-line',
    title: 'Flor Fine Line'
  },
  {
    id: 5,
    src: 'assets/img/gallery/tattoo-5.webp',
    thumbnail: 'assets/img/gallery/tattoo-5-thumb.webp',
    alt: 'Tatuaje estilo neo-traditional - Dragón',
    category: 'neo-tradicional',
    title: 'Dragón Neo-Traditional'
  },
  {
    id: 6,
    src: 'assets/img/gallery/tattoo-6.webp',
    thumbnail: 'assets/img/gallery/tattoo-6-thumb.webp',
    alt: 'Tatuaje estilo punk - Calavera',
    category: 'punk',
    title: 'Calavera Punk'
  }
];

const galleryCategories = [
  { id: 'all', name: 'Todos' },
  { id: 'blackwork', name: 'Blackwork' },
  { id: 'realismo', name: 'Realismo' },
  { id: 'tradicional', name: 'Tradicional' },
  { id: 'fine-line', name: 'Fine Line' },
  { id: 'neo-tradicional', name: 'Neo-Traditional' },
  { id: 'punk', name: 'Punk' }
];

export { galleryData, galleryCategories };
