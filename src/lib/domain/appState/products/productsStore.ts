import { create } from 'zustand'

import { IProduct } from '@/lib/domain/entities/interfaces/productInterfaces';
import * as productService from '@/lib/apiGateway/productService';

type ProductsStoreType = {
    products: IProduct[];
    getProducts: () => Promise<void>;
};

const useProductsStore = create<ProductsStoreType>((set) => ({
  products: [],
  getProducts: () => {
    return productService.getProducts()
      .then(result => set((_state) => ({ products: result })));
  },
}));

export default useProductsStore;
