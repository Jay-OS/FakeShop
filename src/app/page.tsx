"use client"

import Image from "next/image";

import useProductsState from '@/lib/domain/appState/products/useProductState';

export default function Home() {
  const { products } = useProductsState();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          {products.map(product => (
            <div key={product.id}>
              <Image
                src={product.image}
                alt={product.title}
                className="dark:invert"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
