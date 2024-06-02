"use client"

import { MdShoppingCart } from 'react-icons/md';
import { Badge } from '@mui/base/Badge';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import useCartStore from '@/lib/domain/appState/cart/cartStore';

import './cart-preview.css';

function CartPreview() {
    const { cart } = useCartStore();
    const pathname = usePathname();

    const containerStyles = [
        'relative w-10 h-10', // layout
    ];

    const iconContainerStyles = [
        'w-10 h-10 p-2', // layout
        'bg-brand text-white rounded-full', //theme
    ];

    const iconStyles = [
        'w-6 h-6', // layout
    ];

    const badgeStyles = [
        'absolute -top-1 -right-1', // position
        'px-1 text-xs', // layout
        'bg-black text-white rounded-full',  // theme
    ];

    if (['/cart', '/checkout'].some(path => pathname.startsWith(path))) return undefined;

    return (
        <div className={containerStyles.join(' ')}>
            <Link href="/cart" title="View cart">
                <div className={iconContainerStyles.join(' ')}>
                    <MdShoppingCart className={iconStyles.join(' ')} />
                </div>
            </Link>
            <Badge
                badgeContent={cart?.products?.length ?? 0}
                slotProps={{
                    badge: {
                        className: badgeStyles.join(' ')
                    }
                }}
            />
        </div>
    );
};

export default CartPreview;
