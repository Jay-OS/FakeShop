import { IProduct } from './productInterfaces';

export interface ICartProduct {
    productId: number;
    quantity: number;
    productEntity?: IProduct;
    getObject?(): ICartProduct;
};

export interface ICartNoDate {
    id: number;
    userId?: number;
    products: ICartProduct[];
    addProduct(productId: number, quantity: number, product?: IProduct): void;
    deleteProduct(productId: number): void,
    updateProduct(productId: number, quantity: number): void,
    getObject(): Partial<ICart>;
};

export interface ICart extends ICartNoDate {
    date: Date;
};
