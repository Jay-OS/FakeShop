import { Button } from '@mui/base/Button';
import Image from "next/image";
import { MdRemoveShoppingCart } from 'react-icons/md';

import useCartStore from '@/lib/domain/appState/cart/cartStore';
import InvalidArgumentError from '@/lib/domain/errors/InvalidArgumentError';

import QuantitySelect from '@/components/utility/QuantitySelect';

import { ICartProduct } from "@/lib/domain/entities/interfaces/cartInterfaces";

export default function CartListingProductTile({ product }: { product: ICartProduct }) {
    const deleteFromCart = useCartStore(state => state.deleteFromCart);
    const updateCartProduct = useCartStore(state => state.updateCartProduct);

    if (!product.productEntity) throw new InvalidArgumentError('productEntity', product.productEntity);

    const buttonStyles = [
        'bg-slate-400 text-white border border-slate-400 rounded', // theme
        'py-2 px-4', // layout
    ];

    const lineTotal = product.productEntity.price * product.quantity;

    function deleteClick() {
        deleteFromCart(product.productId);
    }

    function quantityChanged(newQuantity: number) {
        updateCartProduct(product.productId, newQuantity);
    }

    return (
        <li className="mt-4 first:mt-0 w-full flex border-b border-slate-300">
            <div className="p-2">
                <div className="min-w-20 min-h-20 relative">
                    <Image
                        src={product.productEntity.image}
                        alt={`Image for ${product.productEntity.title}`}
                        className="dark:invert"
                        objectFit="contain"
                        fill
                    />
                </div>
            </div>
            <div className="grow flex flex-col gap-2 bg-slate-100 p-2">
                <div className="grow flex gap-4">
                    <div className="grow">{product.productEntity.title}</div>
                    <div>£{lineTotal.toFixed(2)}</div>
                </div>
                <div className="flex gap-4 justify-end">
                    <div>
                        <label htmlFor={`update-qty-id${product.productId}`}>Qty:</label>
                        <QuantitySelect
                            id={`update-qty-id${product.productId}`}
                            value={product.quantity}
                            onchange={quantityChanged}
                            maxQuantity={30}
                        />
                    </div>
                    <Button
                        className={buttonStyles.join(' ')}
                        title='Remove from cart'
                        onClick={deleteClick}
                    >
                        <MdRemoveShoppingCart className="text-xl" />
                    </Button>
                </div>
            </div>
        </li>
    );
}
