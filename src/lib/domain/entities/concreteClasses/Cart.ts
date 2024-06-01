import { parseToStrictInteger, parseToDateTime } from '@/lib/utils/parsing'
import { isNullOrUndefined } from '@/lib/utils/validation';
import EntityConversionError from '@/lib/domain/errors/EntityConversionError';

import { ICart, ICartProduct } from '../interfaces/cartInterfaces';

import CartProduct from './CartProduct';

export default class Cart implements ICart {
    private readonly _id: number;
    private readonly _userId: number;
    private readonly _date: Date;
    private readonly _products: ICartProduct[];

    constructor({ id, userId, date, products }: Partial<ICart> & { date?: string }) {
        const parsedId = parseToStrictInteger(id);
        const parsedUserId = parseToStrictInteger(userId);
        const parsedDate = parseToDateTime(date);

        if ([parsedId, parsedUserId, parsedDate].some(value => isNullOrUndefined(value))
            || !Array.isArray(products)) {
            throw new EntityConversionError(`Error parsing Cart with ID = ${id}`);
        }

        this._id = parsedId!;
        this._userId = parsedUserId!;
        this._date = parsedDate!;
        this._products = products!.map(product => new CartProduct(product));
    }

    get id() {
        return this._id;
    }

    get userId() {
        return this._userId;
    }

    get date() {
        return this._date;
    }

    get products() {
        return this._products;
    }

    addProduct(productId: number, quantity: number): void {
        this._products.push(new CartProduct({ productId, quantity }))
    }
}

