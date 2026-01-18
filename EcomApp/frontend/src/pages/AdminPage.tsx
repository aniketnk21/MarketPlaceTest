import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import type { Product } from '../types';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../lib/pocketbase';

export const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
  };

  const handleCreate = async () => {
    if (formData.name && formData.price && formData.category && formData.stock !== undefined) {
      await createProduct({
        name: formData.name,
        description: formData.description || '',
        price: formData.price,
        category: formData.category,
        image: formData.image || '',
        stock: formData.stock,
        brand: formData.brand || ''
      });
      setIsCreating(false);
      setFormData({});
      fetchProducts();
    }
  };

  const handleUpdate = async (id: string) => {
    await updateProduct(id, formData);
    setIsEditing(null);
    setFormData({});
    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  const startEdit = (product: Product) => {
    setIsEditing(product.id);
    setFormData(product);
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setIsCreating(false);
    setFormData({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Product</span>
          </button>
        </div>

        {isCreating && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Create New Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name || ''}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Brand"
                value={formData.brand || ''}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="number"
                placeholder="Price"
                value={formData.price || ''}
                onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <select
                value={formData.category || ''}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">Select Category</option>
                <option value="keyboards">Keyboards</option>
                <option value="mice">Mice</option>
                <option value="monitors">Monitors</option>
                <option value="storage">Storage</option>
                <option value="accessories">Accessories</option>
              </select>
              <input
                type="number"
                placeholder="Stock"
                value={formData.stock || ''}
                onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.image || ''}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <textarea
                placeholder="Description"
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="border border-gray-300 rounded-md px-3 py-2 md:col-span-2"
                rows={3}
              />
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={handleCreate}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === product.id ? (
                      <input
                        type="text"
                        value={formData.name || ''}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                      />
                    ) : (
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.brand}</div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === product.id ? (
                      <input
                        type="number"
                        value={formData.price || ''}
                        onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                        className="border border-gray-300 rounded-md px-2 py-1 w-20"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">${product.price}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === product.id ? (
                      <select
                        value={formData.category || ''}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      >
                        <option value="keyboards">Keyboards</option>
                        <option value="mice">Mice</option>
                        <option value="monitors">Monitors</option>
                        <option value="storage">Storage</option>
                        <option value="accessories">Accessories</option>
                      </select>
                    ) : (
                      <span className="text-sm text-gray-900 capitalize">{product.category}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === product.id ? (
                      <input
                        type="number"
                        value={formData.stock || ''}
                        onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                        className="border border-gray-300 rounded-md px-2 py-1 w-16"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">{product.stock}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {isEditing === product.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleUpdate(product.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Save className="h-4 w-4" />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEdit(product)}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};