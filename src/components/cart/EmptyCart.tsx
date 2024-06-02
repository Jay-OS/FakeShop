import Link from "next/link";
import { MdShoppingCart } from 'react-icons/md';

export default function EmptyCart() {
    const containerStyles = [
        'flex items-center p-10 mt-8', // layout
        'border-2 border-slate-300 rounded-lg', // theme
    ];

    const iconContainerStyles = [
        'w-36 h-36 p-6 mx-auto rounded-full', // layout
        'bg-slate-200 text-slate-400', // theme
    ];

    const iconStyles = [
        'w-24 h-24', // layout
    ];

    return (
        <div className={containerStyles.join(' ')}>
            <div className="w-4/12">
                <div className={iconContainerStyles.join(' ')}>
                    <MdShoppingCart className={iconStyles.join(' ')} />
                </div>
            </div>
            <div className="text-center grow">
                <h2>Your Shopping Cart is currently empty</h2>
                <p>
                    Why not <Link href="/">go back</Link> and add some items?
                </p>
            </div>
        </div>
    );
}
