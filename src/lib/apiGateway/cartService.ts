import * as apiGateway from './apiGateway';

import { ICart } from '@/lib/domain/entities/interfaces/cartInterfaces';
import Cart from '@/lib/domain/entities/concreteClasses/Cart';

const pathRoot = '/carts/';

export function createCart(): Promise<ICart> {
    const url = pathRoot;
    const data: Partial<ICart> = {
        date: new Date(),
        products: [],
    };

    return apiGateway.post<ICart>(url, data, transformCart);
}

export function updateCart(cart: ICart): Promise<ICart> {
    const url = `${pathRoot}${cart.id}`;
    return apiGateway.patch<ICart>(url, cart.getObject(), transformCart);
}

function transformCart(data: string & { date?: string }): ICart {
    return new Cart(JSON.parse(data));
}
