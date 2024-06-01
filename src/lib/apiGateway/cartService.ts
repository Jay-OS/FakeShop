import * as apiGateway from './apiGateway';

import { ICart } from '@/lib/domain/entities/interfaces/cartInterfaces';
import Cart from '@/lib/domain/entities/concreteClasses/Cart';

export function createCart(): Promise<ICart> {
    const url = '/carts/';
    const data: Partial<ICart> = {
        date: new Date(),
        products: [],
    };

    function transformCart(data: Partial<ICart> & { date?: string }): ICart {
        return new Cart(data);
    }

    return apiGateway.post<ICart>(url, data, transformCart);
}
