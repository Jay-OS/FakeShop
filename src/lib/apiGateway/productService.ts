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

    function transformProducts(data: IProduct[]): IProduct[] {
        return data.map(product => new Product(product));
    }

    return apiGateway.get<IProduct[]>(url, params, transformProducts);
}

