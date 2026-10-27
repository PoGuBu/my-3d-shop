# My 3D Shop

A modern website for selling physical 3D prints and digital STL files.

Built with **Next.js + Tailwind CSS**.

---

## How to run it (step by step)

### 1. Requirements
You need **Node.js** installed on your computer.

- Download it here: https://nodejs.org  
  (Choose the **LTS** version)

After installing, open a terminal / command prompt and check it works:
```bash
node -v
npm -v
```

### 2. Unzip the project
Extract `my-3d-shop.zip` somewhere on your computer.

### 3. Install dependencies
Open a terminal **inside** the `my-3d-shop` folder and run:

```bash
npm install
```

This will download everything needed (takes 1–2 minutes the first time).

### 4. Start the website
Still inside the folder, run:

```bash
npm run dev
```

Then open your browser and go to:

**http://localhost:3000**

You should see the shop!

---

## Project structure

```
my-3d-shop/
├── src/
│   ├── app/                  → Pages
│   │   ├── page.tsx          → Homepage
│   │   ├── shop/             → Shop page (with filters)
│   │   ├── product/[id]/    → Individual product pages
│   │   └── contact/          → Contact / commission form
│   ├── components/           → Reusable pieces (Header, ProductCard)
│   └── data/
│       └── products.ts       → All your products live here
├── package.json
└── ...
```

---

## How to add / edit your products

Open this file:

`src/data/products.ts`

You can change names, prices, descriptions, or add new products.

Example of a product:

```ts
{
  id: "my-cool-model",          // unique ID (used in the URL)
  name: "Cool Dragon",
  description: "A detailed dragon...",
  price: 25,
  type: "digital",              // or "physical"
  category: "Creatures",
  image: "/placeholders/...",  // we'll improve images later
  featured: true,               // shows on homepage
}
```

---

## Next steps we can do together

- Add real product images
- Connect real payments (Lemon Squeezy is recommended)
- Add your logo
- Improve the design
- Deploy it live for free on Vercel

Just tell me what you want next!
