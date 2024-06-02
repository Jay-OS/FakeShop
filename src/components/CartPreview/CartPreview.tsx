"use client"

import useCartState from '@/lib/domain/appState/cart/useCartState';

function CartPreview() {
    const cartStore = useCartState();

    return (
        <div>
            Cart: {cartStore.cart?.products.length ?? 0}
        </div>
    );
};

export default CartPreview;
