import Wrapper from '@/components/utility/Wrapper';
import ProductListing from '@/components/products/ProductListing';

export default function Home() {
  return (
    <main className="min-h-screen py-6">
      <Wrapper>
        <h1>Welcome to the FakeShop.</h1>
        <ProductListing />
      </Wrapper>
    </main>
  );
}
