import { parseToStrictInteger } from '@/lib/utils/parsing'
import { isNullOrUndefined } from '@/lib/utils/validation';
import EntityConversionError from '@/lib/domain/errors/EntityConversionError';
import InvalidArgumentError from '@/lib/domain/errors/InvalidArgumentError';

import { ICartProduct } from '../interfaces/cartInterfaces';
import { IProduct } from '../interfaces/productInterfaces';

export default class CartProduct implements ICartProduct {
    private readonly _productId: number;
    private _quantity: number;
    private _productEntity?: IProduct;

    constructor({ productId, quantity, productEntity }: ICartProduct) {
        const parsedProductId = parseToStrictInteger(productId);
        const parsedQuantity = parseToStrictInteger(quantity);

        if ([parsedProductId, parsedQuantity].some(value => isNullOrUndefined(value)))
            throw new EntityConversionError(`Error parsing CartProduct with productID = ${productId}`);

        this._productId = parsedProductId!;
        this._quantity = parsedQuantity!;
        this._productEntity = productEntity;
    }

    get productId() {
        return this._productId;
    }

    get quantity() {
        return this._quantity;
    }
    set quantity(newQuantity) {
        const parsedNewQuantity = parseToStrictInteger(newQuantity);

        if (isNullOrUndefined(parsedNewQuantity) || parsedNewQuantity! < 0)
            throw new InvalidArgumentError('newQuantity', newQuantity);

        this._quantity = parsedNewQuantity!;
    }

    get productEntity() {
        return this._productEntity;
    }

    getObject() {
        return {
            productId: this.productId,
            quantity: this.quantity,
        };
    }
};

