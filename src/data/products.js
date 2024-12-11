export const products = [
  {
    id: 1,
    name: 'Classic Red Rose Bouquet',
    description: 'Elegant arrangement of red roses',
    price: 599000,
    category: 'Roses',
    image: '/products/roses.jpg'
  },
  {
    id: 2,
    name: 'Sunflower Delight',
    description: 'Bright and cheerful sunflower arrangement',
    price: 499000,
    category: 'Sunflowers',
    image: '/products/sunflowers.jpg'
  },
  {
    id: 3,
    name: 'Rainbow Tulips',
    description: 'Colorful mix of fresh tulips',
    price: 649000,
    category: 'Tulips',
    image: '/products/tulips.jpg'
  },
  {
    id: 4,
    name: 'Spring Mix',
    description: 'Beautiful mix of seasonal flowers',
    price: 749000,
    category: 'Mixed Bouquets',
    image: '/products/mixed.jpg'
  },
  {
    id: 5,
    name: 'Pink Rose Bundle',
    description: 'Romantic pink roses arrangement',
    price: 579000,
    category: 'Roses',
    image: '/products/pink-roses.jpg'
  },
  {
    id: 6,
    name: 'Garden Fresh Mix',
    description: 'Fresh mix of garden flowers',
    price: 689000,
    category: 'Mixed Bouquets',
    image: '/products/garden-mix.jpg'
  }
]

export const featuredProducts = products.slice(0, 3)

export const categories = ['All', 'Roses', 'Sunflowers', 'Tulips', 'Mixed Bouquets']