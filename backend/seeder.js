const mongoose = require('mongoose');
const Product = require('./models/productModel'); // Import your Product model

mongoose.connect('mongodb://chkhizarlhr:1234@ac-kbnbria-shard-00-00.qd1ie7r.mongodb.net:27017,ac-kbnbria-shard-00-01.qd1ie7r.mongodb.net:27017,ac-kbnbria-shard-00-02.qd1ie7r.mongodb.net:27017/?ssl=true&replicaSet=atlas-12ar6i-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productsData = [
  {
    name: 'Shirt Plain(Black)',
    description: 'Description for Product 1',
    highlights: ['Highlight 1', 'Highlight 2'],
    specifications: [
      { title: 'Spec 1', description: 'Description 1' },
      { title: 'Spec 2', description: 'Description 2' }
    ],
    price: 100,
    cuttedPrice: 90,
    images: [
      { public_id: '123', url: '/images/mens-button-down-shirt.jpg' },
      { public_id: '456', url: '/images/mens-button-down-shirt.jpg' }
    ],
    brand: {
      name: 'Brand Name',
      logo: { public_id: '789', url: 'http://example.com/logo.jpg' }
    },
    category: 'Men',
    stock: 100,
    user: 'user_id_here'
  },
  {
    name: 'Shoes',
    description: 'Description for Product 1',
    highlights: ['Highlight 1', 'Highlight 2'],
    specifications: [
      { title: 'Spec 1', description: 'Description 1' },
      { title: 'Spec 2', description: 'Description 2' }
    ],
    price: 500,
    cuttedPrice: 20,
    images: [
      { public_id: '123', url: '/images/leather-boots.jpg' },
      { public_id: '456', url: '/images/mens-button-down-shirt.jpg' }
    ],
    brand: {
      name: 'Brand Name',
      logo: { public_id: '789', url: 'http://example.com/logo.jpg' }
    },
    category: 'Men',
    stock: 100,
    user: 'user_id_here'
  },{
    name: 'Bag',
    description: 'Description for Product 1',
    highlights: ['Highlight 1', 'Highlight 2'],
    specifications: [
      { title: 'Spec 1', description: 'Description 1' },
      { title: 'Spec 2', description: 'Description 2' }
    ],
    price: 290,
    cuttedPrice: 60,
    images: [
      { public_id: '123', url: '/images/leather-bag.jpg' },
      { public_id: '456', url: '/images/leather-bag.jpg' }
    ],
    brand: {
      name: 'Brand Name',
      logo: { public_id: '789', url: 'http://example.com/logo.jpg' }
    },
    category: 'Women',
    stock: 100,
    user: 'user_id_here'
  },
  {
    name: 'Jeans Shirt',
    description: 'Description for Product 1',
    highlights: ['Highlight 1', 'Highlight 2'],
    specifications: [
      { title: 'Spec 1', description: 'Description 1' },
      { title: 'Spec 2', description: 'Description 2' }
    ],
    price: 150,
    cuttedPrice: 100,
    images: [
      { public_id: '123', url: '/images/denim-jacket.jpg' },
      { public_id: '456', url: '/images/denim-jacket.jpg' }
    ],
    brand: {
      name: 'Brand Name',
      logo: { public_id: '789', url: 'http://example.com/logo.jpg' }
    },
    category: 'Men',
    stock: 100,
    user: 'user_id_here'
  },{
    name: 'Shirt Plain(White)',
    description: 'Description for Product 1',
    highlights: ['Highlight 1', 'Highlight 2'],
    specifications: [
      { title: 'Spec 1', description: 'Description 1' },
      { title: 'Spec 2', description: 'Description 2' }
    ],
    price: 750,
    cuttedPrice: 80,
    images: [
      { public_id: '123', url: '/images/oxford-shirt.jpg' },
      { public_id: '456', url: '/images/oxford-shirt.jpg' }
    ],
    brand: {
      name: 'Brand Name',
      logo: { public_id: '789', url: 'http://example.com/logo.jpg' }
    },
    category: 'Men',
    stock: 100,
    user: 'user_id_here'
  },
  // Add more products as needed
];

async function seedProducts() {
  try {
    await Product.deleteMany(); 
    await Product.insertMany(productsData); 
    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedProducts();
