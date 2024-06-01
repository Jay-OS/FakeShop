import { parseToStrictInteger } from '@/lib/utils/parsing'
import { isNullOrUndefined, isNullUndefinedOrWhiteSpace, isValidURL } from '@/lib/utils/validation';
import EntityConversionError from '@/lib/domain/errors/EntityConversionError';

import ProductRating from './ProductRating';

import { IProduct, IProductRating } from '../interfaces/productInterfaces';

export default class Product implements IProduct {
    private readonly _id: number;
    private readonly _title: string;
    private readonly _price: number;
    private readonly _category: string;
    private readonly _description?: string;
    private readonly _image: string;
    private readonly _rating: IProductRating;

    constructor({ id, title, price, category, description, image, rating }: IProduct) {
        const parsedId = parseToStrictInteger(id);
        const parsedTitle = !isNullUndefinedOrWhiteSpace(title) ? title.trim() : undefined;

        let parsedPrice: number | undefined = Number.parseFloat(`${price}`);
        parsedPrice = !Number.isNaN(parsedPrice) ? parsedPrice : undefined;

        const parsedCategory = !isNullUndefinedOrWhiteSpace(category) ? category.trim() : undefined;
        const parsedImageURL = isValidURL(image) ? image : undefined;

        if ([parsedId, parsedTitle, parsedPrice, parsedCategory, parsedImageURL].some(value => isNullOrUndefined(value))) {
            throw new EntityConversionError(`Error parsing Product with ID = ${id}`);
        }

        this._id = parsedId!;
        this._title = parsedTitle!;
        this._price = parsedPrice!;
        this._category = parsedCategory!;
        this._description = description?.trim();
        this._image = parsedImageURL!;
        this._rating = new ProductRating(rating);
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get price() {
        return this._price;
    }

    get category() {
        return this._category;
    }

    get description() {
        return this._description;
    }

    get image() {
        return this._image;
    }

    get rating() {
        return this._rating;
    }
}
