# Add To Cart - React Assessment

This is a small React application demonstrating a product list and cart functionality using the Fake Store API.

Features
- Fetch products from https://fakestoreapi.com/
- Display products with image, title, price and description
- Add / Remove items from cart
- Increase / Decrease quantities in cart
- Per-item and total price calculations
- 10% discount applied to final total
- Routing between products and cart pages using React Router
- State persisted to `localStorage`

Tech
- React
- React Router
- Tailwind CSS
- Vite

Setup

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Deploy

Deploy the `dist` folder produced by `npm run build` to Netlify or any static hosting provider. On Netlify you can connect your GitHub repo and set the build command to `npm run build` and publish folder to `dist`.

Notes
- Make sure to run `npx tailwindcss init` or use the provided `tailwind.config.cjs` if you customize the design.
