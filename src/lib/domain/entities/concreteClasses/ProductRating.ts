import { parseToStrictInteger } from '@/lib/utils/parsing'
import { isNullOrUndefined } from '@/lib/utils/validation';
import EntityConversionError from '@/lib/domain/errors/EntityConversionError';

import { IProductRating } from '../interfaces/productInterfaces';

export default class ProductRating implements IProductRating {
    private readonly _rate: number;
    private readonly _count: number;

    constructor({ rate, count }: IProductRating) {
        let parsedRate: number | undefined = Number.parseFloat(`${rate}`);
        parsedRate = !Number.isNaN(parsedRate) && ratingIsWithinBounds(parsedRate)
            ? parsedRate : undefined;

        const parsedCount = parseToStrictInteger(count);

        if ([parsedRate, parsedCount].some(value => isNullOrUndefined(value))) {
            throw new EntityConversionError('Error parsing ProductRating');
        }

        this._rate = parsedRate!;
        this._count = parsedCount!;
    }

    get rate() {
        return this._rate;
    }

    get count() {
        return this._count;
    }
}

function ratingIsWithinBounds(rating: number): boolean {
    return rating >=0 && rating <= 5;
}
