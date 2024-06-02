"use client"

import ProductTile from './ProductTile';

import useProductsState from '@/lib/domain/appState/products/useProductState';

export default function ProductListing() {
    const { productsStore, isLoading } = useProductsState();

    const styles = [
        'w-full py-12 grid gap-8', // layout
        'grid-cols-1 md:grid-cols-3 xl:grid-cols-4', // columns
    ];

    return (
        <ul className={styles.join(' ')}>
            {productsStore.products.map(product => (
                <ProductTile key={product.id} product={product} />
            ))}
        </ul>
    );
}
