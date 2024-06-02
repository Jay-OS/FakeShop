import * as apiGateway from './apiGateway';
import appConfiguration from '@/lib/config/appConfiguration';

import { sortOrderEnum } from '@/lib/domain/enums/sortOrder';
import { IProduct } from '@/lib/domain/entities/interfaces/productInterfaces';
import Product from '@/lib/domain/entities/concreteClasses/Product';

export function getProducts(sortOrder?: sortOrderEnum, category?: string): Promise<IProduct[]> {
    const url = `/products/${!!category ? `category/${category}/` : ''}`;
    const params = {
        sort: sortOrder,
        limit: appConfiguration.layout.pageSize,
    };

    return apiGateway.get<IProduct[]>(url, params, transformProducts);
}

function transformProducts(data: string): IProduct[] {
    const parsedJSON: IProduct[] = JSON.parse(data);
    return parsedJSON.map(product => new Product(product));
}
