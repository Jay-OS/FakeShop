import { useEffect, useState } from 'react';

import useProductsStore from './productsStore';

export default function useProductsState() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const productsStore = useProductsStore();

    useEffect(() => {
        if (productsStore.products.length === 0) {
            setIsLoading(true);
            productsStore.getProducts()
                .then(() => setIsLoading(false));
        };
    }, [productsStore]);

    return {
        productsStore,
        isLoading
    };
}
