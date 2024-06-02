# FakeShop

## Packages used

* **Next.js**
* **MUI - Material UI**
* **Tailwind CSS**
* **TypeScript**

## Launching the app

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture and design decisions

As the FakeStoreApi responses don't reflect any previous changes in state, I wasn't able to implement data fetching
in the way I would have preferred. Ideally I would have used the extended Next.js version of fetch and taken advantage
of caching and revalidation.

I identified the main domain entities as the cart and the products and built my domain, data fetching and application
state around those.

Next.js gave me routing and error handling, whilst UI and styling are taken care of by MUI for the component library
and Tailwind CSS for the styling, allowing me to rapidly put together a responsive UI.

## From demo to production ready

To take this to production ready, I would:
1. spend time looking at the data fetching approach
1. once the data fetching is sorted I should be able to take advantage of SSR on the product listing page
1. introduce individual product pages to showcase products
1. introduce grouping of products into categories
1. extend unit and automation testing to cover as much of the project as is worthwhile
1. introduce pagination for the products.
1. fully implement the checkout process, integrating a payment provider
1. make more effort to understand unique users in order to persist baskets, etc.
1. add metadata to product pages to aid search engine listings and social media links
1. implement authentication and authorisation
