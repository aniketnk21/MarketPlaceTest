import PocketBase from 'pocketbase';
import type { Product } from '../types';

export const pb = new PocketBase('http://127.0.0.1:8090');

export const getProducts = async (): Promise<Product[]> => {
  try {
    const records = await pb.collection('products').getFullList();
    return records.map(record => ({
      id: record.id,
      name: record.name,
      description: record.description || '',
      price: record.price,
      category: record.category,
      image: record.image ? pb.files.getUrl(record, record.image) : '',
      stock: record.stock,
      brand: record.brand || '',
      created: record.created,
      updated: record.updated
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const createProduct = async (data: Omit<Product, 'id' | 'created' | 'updated'>) => {
  return await pb.collection('products').create(data);
};

export const updateProduct = async (id: string, data: Partial<Product>) => {
  return await pb.collection('products').update(id, data);
};

export const deleteProduct = async (id: string) => {
  return await pb.collection('products').delete(id);
};