import { parseToStrictInteger, parseToDateTime } from '@/lib/utils/parsing'
import { isNullOrUndefined } from '@/lib/utils/validation';
import EntityConversionError from '@/lib/domain/errors/EntityConversionError';

import { ICart, ICartNoDate, ICartProduct } from '../interfaces/cartInterfaces';
import { IProduct } from '../interfaces/productInterfaces';

import CartProduct from './CartProduct';

export default class Cart implements ICart {
    private readonly _id: number;
    private readonly _userId?: number;
    private readonly _date: Date;
    private readonly _products: ICartProduct[];

    constructor({ id, userId, date, products }: Partial<ICartNoDate> & { date?: string }) {
        const parsedId = parseToStrictInteger(id);
        const parsedUserId = parseToStrictInteger(userId);
        const parsedDate = parseToDateTime(date);

        if ([parsedId, parsedDate].some(value => isNullOrUndefined(value))
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

    addProduct (productId: number, quantity: number, product?: IProduct): void {
        const productInCart = this._products.find(prd => prd.productId === productId);

        if (productInCart) {
            productInCart.quantity = productInCart.quantity + quantity;
            return;
        }

        this._products.push(new CartProduct({ productId, quantity, productEntity: product }))
    }

    deleteProduct(productId: number): void {
        const productIndex = this._products.findIndex(product => product.productId === productId);
        if (productIndex > -1) this._products.splice(productIndex, 1);
    }

    updateProduct(productId: number, quantity: number): void {
        const product = this._products.find(prd => prd.productId === productId);
        if (product) product.quantity = quantity;
    }

    emptyCart() {
        this._products.splice(0, this._products.length);
    }

    getObject(): Partial<ICart> {
        return {
            id: this.id,
            userId: this.userId,
            date: this.date,
            products: this.products.map(product => product.getObject!()),
        };
    }
}
