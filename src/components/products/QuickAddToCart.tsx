import { useState } from 'react';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { Button } from '@mui/base/Button';
import { MdAddShoppingCart } from 'react-icons/md';

import { IProduct } from '@/lib/domain/entities/interfaces/productInterfaces';

export default function QuickAddToCart({ product }: { product: IProduct }) {
    const [quantity, setQuantity] = useState<number | null>(1);

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
        <form className={formStyles.join(' ')}>
            <Select
                value={quantity}
                onChange={(_, newValue) => setQuantity(newValue)}
                id={`quick-add-qty-${product.id}`}
                name="quick-add-qty"
                aria-label="Select quantity"
                className={selectStyles.join(' ')}
                slotProps={{ listbox: {
                    className: 'border border-slate-300 rounded bg-white'
                }}}
            >
                {[1, 2, 3, 4, 5].map(value => {
                    const additionalStyles = value === quantity ? 'bg-brand text-white' : 'hover:bg-slate-100 hover:text-black';
                    const styles = [
                        ...optionStyles,
                        additionalStyles,
                    ];
                    return (
                        <Option key={`${product.id}-qty-${value}`} value={value} className={styles.join(' ')}>{value}</Option>
                    )
                })}
            </Select>
            <Button className={buttonStyles.join(' ')}>
                <MdAddShoppingCart className="text-xl" aria-label="Add to cart" />
            </Button>
        </form>
    );
}
