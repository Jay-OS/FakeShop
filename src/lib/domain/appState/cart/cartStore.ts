import { create } from 'zustand'

import { ICart } from '@/lib/domain/entities/interfaces/cartInterfaces';
import * as cartService from '@/lib/apiGateway/cartService';

type CartStoreType = {
    cart?: ICart;
    createCart: () => void;
};

const useCartStore = create<CartStoreType>((set) => ({
  cart: undefined,
  createCart: async () => { 
    const cart = await cartService.createCart();
    set((_state) => ({ cart }))
  },
}));

export default useCartStore;
