export interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  description: string
  category: string
  specifications: {
    processor: string
    ram: string
    storage: string
    display: string
    graphics: string
  }
  inStock: boolean
  rating: number
  reviews: number
}

export interface Brand {
  id: string
  name: string
  logo: string
  description: string
}

export const brands: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    description: 'Premium laptops known for their sleek design and powerful performance.'
  },
  {
    id: 'dell',
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Dell_logo.svg',
    description: 'Reliable business and gaming laptops with excellent build quality.'
  },
  {
    id: 'hp',
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/HP_logo_2012.svg',
    description: 'Versatile laptops for every need, from casual to professional use.'
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Lenovo_logo_2023.svg',
    description: 'Innovative laptops combining performance with affordability.'
  },
  {
    id: 'asus',
    name: 'ASUS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Asus_logo.svg',
    description: 'High-performance laptops for gaming and professional applications.'
  },
  {
    id: 'acer',
    name: 'Acer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Acer_Logo.svg',
    description: 'Budget-friendly laptops with solid performance and features.'
  }
]

export const products: Product[] = [
  // Apple products
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    brand: 'Apple',
    price: 1999,
    originalPrice: 2399,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60',
    description: 'Powerful laptop with M3 Pro chip, perfect for professionals and creators.',
    category: 'Apple',
    specifications: {
      processor: 'Apple M3 Pro',
      ram: '18GB',
      storage: '512GB SSD',
      display: '14.2" Liquid Retina XDR',
      graphics: '18-core GPU'
    },
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'macbook-air-13',
    name: 'MacBook Air 13"',
    brand: 'Apple',
    price: 999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60',
    description: 'Ultra-portable laptop with M2 chip, ideal for everyday tasks.',
    category: 'Apple',
    specifications: {
      processor: 'Apple M2',
      ram: '8GB',
      storage: '256GB SSD',
      display: '13.6" Liquid Retina',
      graphics: '8-core GPU'
    },
    inStock: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16"',
    brand: 'Apple',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60',
    description: 'The ultimate pro laptop with M3 Max chip for demanding workflows.',
    category: 'Apple',
    specifications: {
      processor: 'Apple M3 Max',
      ram: '36GB',
      storage: '1TB SSD',
      display: '16.2" Liquid Retina XDR',
      graphics: '40-core GPU'
    },
    inStock: false,
    rating: 4.9,
    reviews: 89
  },

  // Dell products
  {
    id: 'xps-13',
    name: 'XPS 13',
    brand: 'Dell',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=60',
    description: 'Ultra-thin and lightweight laptop with stunning display.',
    category: 'Dell',
    specifications: {
      processor: 'Intel Core i7-1360P',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.4" FHD+',
      graphics: 'Intel Iris Xe'
    },
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'alienware-m15',
    name: 'Alienware m15 R7',
    brand: 'Dell',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&auto=format&fit=crop&q=60',
    description: 'High-performance gaming laptop with powerful graphics.',
    category: 'Dell',
    specifications: {
      processor: 'Intel Core i7-12700H',
      ram: '16GB',
      storage: '1TB SSD',
      display: '15.6" FHD 165Hz',
      graphics: 'NVIDIA RTX 3070'
    },
    inStock: true,
    rating: 4.5,
    reviews: 203
  },
  {
    id: 'inspiron-15',
    name: 'Inspiron 15',
    brand: 'Dell',
    price: 699,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60',
    description: 'Reliable everyday laptop with solid performance.',
    category: 'Dell',
    specifications: {
      processor: 'Intel Core i5-1240P',
      ram: '8GB',
      storage: '256GB SSD',
      display: '15.6" FHD',
      graphics: 'Intel Iris Xe'
    },
    inStock: true,
    rating: 4.3,
    reviews: 342
  },

  // HP products
  {
    id: 'spectre-x360',
    name: 'Spectre x360',
    brand: 'HP',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60',
    description: 'Convertible laptop with premium design and performance.',
    category: 'HP',
    specifications: {
      processor: 'Intel Core i7-1355U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.5" 3K2K',
      graphics: 'Intel Iris Xe'
    },
    inStock: true,
    rating: 4.7,
    reviews: 189
  },

  {
    id: 'pavilion-14',
    name: 'Pavilion 14',
    brand: 'HP',
    price: 799,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
    description: 'Stylish and affordable laptop for everyday use.',
    category: 'HP',
    specifications: {
      processor: 'AMD Ryzen 5 7530U',
      ram: '8GB',
      storage: '512GB SSD',
      display: '14" FHD',
      graphics: 'AMD Radeon Graphics'
    },
    inStock: true,
    rating: 4.2,
    reviews: 278
  },

  // Lenovo products
  {
    id: 'thinkpad-x1',
    name: 'ThinkPad X1 Carbon',
    brand: 'Lenovo',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60',
    description: 'Premium business laptop with legendary durability.',
    category: 'Lenovo',
    specifications: {
      processor: 'Intel Core i7-1365U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14" WUXGA',
      graphics: 'Intel Iris Xe'
    },
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'yoga-9i',
    name: 'Yoga 9i',
    brand: 'Lenovo',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60',
    description: 'Premium 2-in-1 laptop with stunning design.',
    category: 'Lenovo',
    specifications: {
      processor: 'Intel Core i7-1260P',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14" 2.8K OLED',
      graphics: 'Intel Iris Xe'
    },
    inStock: true,
    rating: 4.6,
    reviews: 198
  },
  {
    id: 'ideapad-5',
    name: 'IdeaPad 5',
    brand: 'Lenovo',
    price: 649,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
    description: 'Versatile laptop perfect for students and professionals.',
    category: 'Lenovo',
    specifications: {
      processor: 'AMD Ryzen 5 7530U',
      ram: '8GB',
      storage: '256GB SSD',
      display: '15.6" FHD',
      graphics: 'AMD Radeon Graphics'
    },
    inStock: true,
    rating: 4.3,
    reviews: 321
  },

  // ASUS products
  {
    id: 'zenbook-pro',
    name: 'ZenBook Pro 14',
    brand: 'ASUS',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60',
    description: 'Professional laptop with stunning OLED display.',
    category: 'ASUS',
    specifications: {
      processor: 'AMD Ryzen 9 7940HS',
      ram: '16GB',
      storage: '1TB SSD',
      display: '14.5" 2.8K OLED',
      graphics: 'NVIDIA RTX 4060'
    },
    inStock: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'rog-strix',
    name: 'ROG Strix G15',
    brand: 'ASUS',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&auto=format&fit=crop&q=60',
    description: 'Gaming laptop with powerful performance and RGB lighting.',
    category: 'ASUS',
    specifications: {
      processor: 'AMD Ryzen 7 7745HS',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6" QHD 165Hz',
      graphics: 'NVIDIA RTX 4060'
    },
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 'vivobook-s15',
    name: 'VivoBook S15',
    brand: 'ASUS',
    price: 799,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60',
    description: 'Slim and lightweight laptop for everyday productivity.',
    category: 'ASUS',
    specifications: {
      processor: 'Intel Core i5-1240P',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6" FHD',
      graphics: 'Intel Iris Xe'
    },
    inStock: true,
    rating: 4.2,
    reviews: 289
  },

  // Acer products
  {
    id: 'swift-3',
    name: 'Swift 3',
    brand: 'Acer',
    price: 599,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
    description: 'Affordable ultraportable laptop with solid performance.',
    category: 'Acer',
    specifications: {
      processor: 'AMD Ryzen 5 7530U',
      ram: '8GB',
      storage: '256GB SSD',
      display: '14" FHD',
      graphics: 'AMD Radeon Graphics'
    },
    inStock: true,
    rating: 4.1,
    reviews: 423
  },
  {
    id: 'nitro-5',
    name: 'Nitro 5',
    brand: 'Acer',
    price: 899,
    image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&auto=format&fit=crop&q=60',
    description: 'Budget gaming laptop with powerful graphics.',
    category: 'Acer',
    specifications: {
      processor: 'Intel Core i5-12450H',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6" FHD 144Hz',
      graphics: 'NVIDIA RTX 3050'
    },
    inStock: true,
    rating: 4.3,
    reviews: 356
  },
  {
    id: 'aspire-5',
    name: 'Aspire 5',
    brand: 'Acer',
    price: 499,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60',
    description: 'Entry-level laptop perfect for basic computing tasks.',
    category: 'Acer',
    specifications: {
      processor: 'AMD Ryzen 3 7320U',
      ram: '4GB',
      storage: '128GB SSD',
      display: '15.6" FHD',
      graphics: 'AMD Radeon Graphics'
    },
    inStock: true,
    rating: 4.0,
    reviews: 512
  }
]
