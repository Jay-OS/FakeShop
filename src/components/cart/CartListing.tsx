import { useRouter } from 'next/navigation'
import { Button } from '@mui/base/Button';
import { MdShoppingCartCheckout } from 'react-icons/md';

import InvalidArgumentError from '@/lib/domain/errors/InvalidArgumentError';

import useCartStore from '@/lib/domain/appState/cart/cartStore';

import CartListingProductTile from './CartListingProductTile';

import { ICart } from '@/lib/domain/entities/interfaces/cartInterfaces';

export default function CartListing({ cart }: { cart: ICart }) {
    if (!cart) throw new InvalidArgumentError('cart', cart);

    const router = useRouter()
    const emptyCart = useCartStore(state => state.emptyCart);

    const cartTotal = cart.products.reduce(
        (acc, curr) => {
            const lineTotal = (curr.productEntity?.price ?? 0) * curr.quantity;
            return acc + lineTotal;
        },
        0
    );

    function onCheckoutClick() {
        emptyCart();
        router.push('/checkout');
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <section className="grow">
                <ul className="w-full">
                    {cart.products.map(product => (
                        <CartListingProductTile key={product.productId} product={product} />
                    ))}
                </ul>
            </section>
            <section className="w-full lg:w-auto min-w-60 mt-4 lg:mt-0">
                <p className="flex text-xl">
                    <span className="grow">Total:</span>
                    <span className="grow text-right">£{cartTotal.toFixed(2)}</span>
                </p>
                <p className="text-xs text-right text-slate-600">
                    Exc. UK Standard Delivery<br />(Normally £4.95)
                </p>
                <Button
                    className="w-full py-2 mt-4 flex gap-2 justify-center bg-brand text-white font-bold rounded"
                    aria-label="Got to Checkout"
                    onClick={onCheckoutClick}
                >
                    Checkout
                    <MdShoppingCartCheckout className="w-6 h-6" />
                </Button>
            </section>
        </div>
    );
}
