import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

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

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <img
          src={product.image || '/api/placeholder/300/300'}
          alt={product.name}
          className="h-48 w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.brand}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.5</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};