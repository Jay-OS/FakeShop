import Wrapper from '@/components/utility/Wrapper';
import EmptyCart from '@/components/cart/EmptyCart';

export default function Cart() {
  return (
    <main className="min-h-screen py-6">
      <Wrapper>
        <h1>Shopping Cart</h1>
        <EmptyCart />
      </Wrapper>
    </main>
  );
}