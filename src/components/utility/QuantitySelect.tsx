import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';

type QuantitySelectPropsType = {
    id: string,
    value: number,
    onchange: (value: number) => void,
    maxQuantity?: number,
    disabled?: boolean
}

export default function QuantitySelect({ id, value, onchange, maxQuantity, disabled }: QuantitySelectPropsType) {
    const selectStyles = [
        'border border-slate-300 rounded bg-white disabled:text-slate-300', // theme
        'grow p-2', // layout
    ];

    const optionStyles = [
        'py-2 px-6', // layout
        'cursor-pointer select-none', // interaction
    ];

    const quantityOptionValues = Array.from(Array((maxQuantity ?? 5) + 1).keys()).slice(1);

    return (
        <Select
            value={value}
            onChange={(_, newValue) => onchange(newValue ?? 0)}
            id={id}
            name="quick-add-qty"
            aria-label="Select quantity"
            className={selectStyles.join(' ')}
            slotProps={{ listbox: {
                className: 'border border-slate-300 rounded bg-white'
            }}}
            disabled={disabled}
        >
            {quantityOptionValues.map(optionValue => {
                const additionalStyles = optionValue === value ? 'bg-brand text-white' : 'hover:bg-slate-100 hover:text-black';
                const styles = [
                    ...optionStyles,
                    additionalStyles,
                ];
                return (
                    <Option key={`${id}-qty${optionValue}`} value={optionValue} className={styles.join(' ')}>{optionValue}</Option>
                )
            })}
        </Select>
    );
}
