import { useEffect, useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
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

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Mock data - replace with actual PocketBase fetch
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Gaming Mechanical Keyboard',
        description: 'RGB backlit mechanical keyboard with Cherry MX switches for ultimate gaming experience',
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
        description: 'High-precision wireless gaming mouse with RGB lighting and customizable buttons',
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
        description: '4K UHD gaming monitor with 144Hz refresh rate and HDR support',
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
        description: 'High-speed NVMe SSD for faster boot and load times with 5-year warranty',
        price: 149.99,
        category: 'storage',
        image: '/api/placeholder/300/300',
        stock: 20,
        brand: 'SpeedDrive',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      },
      {
        id: '5',
        name: 'USB-C Hub',
        description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
        price: 49.99,
        category: 'accessories',
        image: '/api/placeholder/300/300',
        stock: 30,
        brand: 'ConnectPro',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      },
      {
        id: '6',
        name: 'Webcam HD 1080p',
        description: 'Full HD webcam with auto-focus and built-in microphone',
        price: 89.99,
        category: 'accessories',
        image: '/api/placeholder/300/300',
        stock: 12,
        brand: 'ClearView',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
      }
    ];
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy]);

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'keyboards', label: 'Keyboards' },
    { value: 'mice', label: 'Mice' },
    { value: 'monitors', label: 'Monitors' },
    { value: 'storage', label: 'Storage' },
    { value: 'accessories', label: 'Accessories' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Filters</h3>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};