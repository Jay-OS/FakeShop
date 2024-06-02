import { create } from 'zustand'

import { ICart, ICartProduct } from '@/lib/domain/entities/interfaces/cartInterfaces';
import Cart from '@/lib/domain/entities/concreteClasses/Cart';
import * as cartService from '@/lib/apiGateway/cartService';

type CartStoreType = {
    cart?: ICart;
    createCart: () => void;
    addToCart: (cartProduct: ICartProduct) => void;
    deleteFromCart: (productId: number) => void;
    updateCartProduct: (productId: number, quantity: number) => void,
};

const useCartStore = create<CartStoreType>((set, get) => ({
  cart: undefined,
  createCart: async () => { 
    const cart = await cartService.createCart();
    set((_state) => ({ cart }))
  },
  addToCart: async (cartProduct: ICartProduct) => {
    let stateCart = get().cart;
    stateCart = stateCart ?? await cartService.createCart();
    stateCart.addProduct(cartProduct.productId, cartProduct.quantity, cartProduct.productEntity);

    stateCart = getNewCart(stateCart);

    await cartService.updateCart(stateCart);
    set((_state) => ({ cart: stateCart }))
  },
  deleteFromCart: async (productId: number) => {
    let stateCart = get().cart;
    stateCart = stateCart ?? await cartService.createCart();
    stateCart.deleteProduct(productId);

    stateCart = getNewCart(stateCart);

    await cartService.updateCart(stateCart);
    set((_state) => ({ cart: stateCart }))
  },
  updateCartProduct: async (productId: number, quantity: number) => {
    let stateCart = get().cart;
    stateCart = stateCart ?? await cartService.createCart();
    stateCart.updateProduct(productId, quantity);

    stateCart = getNewCart(stateCart);

    await cartService.updateCart(stateCart);
    set((_state) => ({ cart: stateCart }))
  },
}));

function getNewCart(cart: ICart): ICart {
  return new Cart({
    id: cart.id,
    userId: cart.userId,
    date: cart.date.toString(),
    products: cart.products,
  });
}

export default useCartStore;
