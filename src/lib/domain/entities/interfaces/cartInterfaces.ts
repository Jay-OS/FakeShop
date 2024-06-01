export interface ICartProduct {
    productId:  number;
    quantity: number;
};

export interface ICart {
    id: number;
    userId: number;
    date: Date;
    products: ICartProduct[];
    addProduct(productId: number, quantity: number): void;
};
