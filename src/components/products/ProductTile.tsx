import Image from "next/image";

import QuickAddToCart from './QuickAddToCart';

import { IProduct } from '@/lib/domain/entities/interfaces/productInterfaces';

export default function ProductTile({ product }: { product: IProduct }) {
    const styles = [
        'border border-slate rounded-sm p-4', // theme
        'flex flex-col', // layout
    ];

    return (
        <li className={styles.join(' ')}>
            <div className="grow place-content-center">
                <Image
                    src={product.image}
                    alt={`Image for ${product.title}`}
                    className="dark:invert"
                    width={300}
                    height={300}
                />
            </div>
            <div className="mt-4">
                <h2>{product.title}</h2>
                <QuickAddToCart product={product} />
            </div>
        </li>
    );
}
