"use client"

import React, { useState } from 'react';
import { Button } from '@mui/base/Button';
import { MdAddShoppingCart } from 'react-icons/md';

import QuantitySelect from '@/components/utility/QuantitySelect';

import { IProduct } from '@/lib/domain/entities/interfaces/productInterfaces';
import useCartStore from '@/lib/domain/appState/cart/cartStore';

export default function QuickAddToCart({ product }: { product: IProduct }) {
    const [quantity, setQuantity] = useState<number | null>(1);
    const [disableCommands, setDisableCommands] = useState<boolean>(false);
    const addToCart = useCartStore(state => state.addToCart);

    function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisableCommands(true);
        addToCart({ productId: product.id, quantity: quantity ?? 0, productEntity: product})
            .then(() => setTimeout(() => setDisableCommands(false), 500));
    }

    const formStyles = [
        'flex gap-1 mt-2', // layout
    ];

    const buttonStyles = [
        'bg-brand text-white rounded', // theme
        'disabled:bg-slate-400 ', // disabled theme
        'py-2 px-4', // layout
    ];

    return (
        <form onSubmit={onFormSubmit} className={formStyles.join(' ')}>
            <QuantitySelect
                value={quantity ?? 1}
                onchange={setQuantity}
                id={`quick-add-qty-id${product.id}`}
                disabled={disableCommands}
            />
            <Button
                type="submit"
                className={buttonStyles.join(' ')}
                title="Add to cart"
                disabled={disableCommands}
            >
                <MdAddShoppingCart className="text-xl" />
            </Button>
        </form>
    );
}
