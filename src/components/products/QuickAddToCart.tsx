"use client"

import React, { useState } from 'react';
import { Button } from '@mui/base/Button';
import { MdAddShoppingCart } from 'react-icons/md';

import QuantitySelect from '@/components/utility/QuantitySelect';

import { IProduct } from '@/lib/domain/entities/interfaces/productInterfaces';
import useCartStore from '@/lib/domain/appState/cart/cartStore';

export default function QuickAddToCart({ product }: { product: IProduct }) {
    const [quantity, setQuantity] = useState<number | null>(1);
    const addToCart = useCartStore(state => state.addToCart);

    function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addToCart({ productId: product.id, quantity: quantity ?? 0, productEntity: product});
    }

    const formStyles = [
        'flex gap-1 mt-2', // layout
    ];

    const selectStyles = [
        'border border-slate-300 rounded', // theme
        'grow p-2', // layout
    ];

    const optionStyles = [
        'py-2 px-6', // layout
        'cursor-pointer select-none', // interaction
    ];

    const buttonStyles = [
        'bg-brand text-white border border-brand rounded', // theme
        'py-2 px-4', // layout
    ];

    return (
        <form onSubmit={onFormSubmit} className={formStyles.join(' ')}>
            <QuantitySelect
                value={quantity ?? 1}
                onchange={setQuantity}
                id={`quick-add-qty-id${product.id}`}
            />
            <Button type="submit" className={buttonStyles.join(' ')} title="Add to cart">
                <MdAddShoppingCart className="text-xl" />
            </Button>
        </form>
    );
}
