import Wrapper from '@/components/utility/Wrapper';
import CheckoutComplete from '@/components/checkout/CheckoutComplete';

export default function Checkout() {
    return (
      <main className="min-h-screen py-6">
        <Wrapper>
            <h1>Checkout complete</h1>
            <CheckoutComplete />
        </Wrapper>
      </main>
    );
}
