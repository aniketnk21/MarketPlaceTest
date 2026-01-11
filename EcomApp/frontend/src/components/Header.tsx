import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { state } = useCart();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">TechStore</h1>
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/products" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Products
              </Link>
              <Link to="/categories" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Categories
              </Link>
            </nav>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-500">
              <User className="h-6 w-6" />
            </button>
            <Link to="/cart" className="relative text-gray-400 hover:text-gray-500">
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
            <button className="md:hidden text-gray-400 hover:text-gray-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};