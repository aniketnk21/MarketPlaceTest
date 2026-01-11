import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, HardDrive, Monitor, Mouse } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  brand: string;
  created: string;
  updated: string;
}

export const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Mock data for demonstration
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Gaming Mechanical Keyboard',
        description: 'RGB backlit mechanical keyboard with Cherry MX switches',
        price: 129.99,
        category: 'keyboards',
        image: '/api/placeholder/300/300',
        stock: 15,
        brand: 'TechPro',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Wireless Gaming Mouse',
        description: 'High-precision wireless gaming mouse with RGB lighting',
        price: 79.99,
        category: 'mice',
        image: '/api/placeholder/300/300',
        stock: 25,
        brand: 'GameMax',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      },
      {
        id: '3',
        name: '27" 4K Gaming Monitor',
        description: '4K UHD gaming monitor with 144Hz refresh rate',
        price: 399.99,
        category: 'monitors',
        image: '/api/placeholder/300/300',
        stock: 8,
        brand: 'ViewTech',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      },
      {
        id: '4',
        name: '1TB NVMe SSD',
        description: 'High-speed NVMe SSD for faster boot and load times',
        price: 149.99,
        category: 'storage',
        image: '/api/placeholder/300/300',
        stock: 20,
        brand: 'SpeedDrive',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      }
    ];
    setFeaturedProducts(mockProducts);
  }, []);

  const categories = [
    { name: 'Processors', icon: Cpu, count: 45 },
    { name: 'Storage', icon: HardDrive, count: 32 },
    { name: 'Monitors', icon: Monitor, count: 28 },
    { name: 'Peripherals', icon: Mouse, count: 67 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Computer Accessories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Upgrade your setup with professional-grade components
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <category.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/products"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};