import { create } from 'zustand'

import { IProduct } from '@/lib/domain/entities/interfaces/productInterfaces';
import * as productService from '@/lib/apiGateway/productService';

type ProductsStoreType = {
    products: IProduct[];
    getProducts: () => void;
};

const useProductsStore = create<ProductsStoreType>((set) => ({
  products: [],
  getProducts: async () => { 
    const products = await productService.getProducts();
    set((_state) => ({ products }))
  },
}));

export default useProductsStore;
