import { useEffect } from 'react';

import useProductsStore from './productsStore';

export default function useProductsState() {
    const productsStore = useProductsStore();

    useEffect(() => {
        if (productsStore.products.length === 0) productsStore.getProducts();
    }, [productsStore]);

    return productsStore;
}
