import { useEffect } from 'react';

import useCartStore from './cartStore';

export default function useCartState() {
    const cartStore = useCartStore();

    useEffect(() => {
        if (!cartStore.cart) cartStore.createCart();
    }, [cartStore]);

    return cartStore;
}
