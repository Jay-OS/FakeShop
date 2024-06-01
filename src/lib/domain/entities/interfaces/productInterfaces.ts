export interface IProductRating {
    rate: number;
    count: number;
};

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description?: string;
    image: string;
    rating: IProductRating;
};
