"use client"

import Wrapper from '@/components/utility/Wrapper';
import EmptyCart from '@/components/cart/EmptyCart';
import CartListing from '@/components/cart/CartListing';

import useCartStore from '@/lib/domain/appState/cart/cartStore';

export default function Cart() {
  const cart = useCartStore(state => state.cart);

  return (
    <main className="min-h-screen py-6">
      <Wrapper>
        <h1>Shopping Cart ({cart?.products.length ?? 0} items)</h1>
        {!cart?.products.length
            ? (<EmptyCart />)
            : (<CartListing cart={cart} />)}
      </Wrapper>
    </main>
  );
}