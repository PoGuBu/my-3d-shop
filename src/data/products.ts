export type ProductType = "physical" | "digital";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: ProductType;
  category: string;
  images: string[];
  buyUrl?: string;        
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "helloin",
    name: "HELLO - IN ERROR 4X4",
    description:
      "Tematyczna zawieszka dla Error 4x4 na event HELLO-IN",
    price: 2.00,
    type: "digital",
    category: "custom made",
    images: [
      "/products/helloin.png",
      "hello2.jpg",
    ],
    buyUrl:"https://my3dshop.lemonsqueezy.com/checkout/buy/c95c3569-d741-442a-b33c-faee077e269f",
      featured: true,
  },
  {
    id: "fox1",
    name: "Fox - 1",
    description:
      "Awesome remote controled pusher plane.",
    price: 12,
    type: "physical",
    category: "Toys",
    images: [
      "/products/skull-1.jpg",
      "/products/skull-2.jpg",
    ],
    featured: true,
  },
  {
    id: "modular-vase",
    name: "Modular Geometric Vase",
    description:
      "Beautiful modular vase system. Print multiple parts and mix them. Physical version comes fully printed.",
    price: 45,
    type: "physical",
    category: "Home",
    images: [
      "/products/vase-1.jpg",
      "/products/vase-2.jpg",
      "/products/vase-3.jpg",
    ],
    featured: true,
  },
  {
    id: "lowpoly-fox",
    name: "Low Poly Fox",
    description:
      "Cute low-poly fox STL. Great for beginners. Includes pre-supported version.",
    price: 8,
    type: "digital",
    category: "Creatures",
    images: ["/products/fox-1.jpg"],
  },
  {
    id: "desk-organizer",
    name: "Hex Desk Organizer",
    description:
      "Sleek hexagonal desk organizer with phone stand and pen holders. Printed in high-quality filament.",
    price: 32,
    type: "physical",
    category: "Home",
    images: [
      "/products/organizer-1.jpg",
      "/products/organizer-2.jpg",
    ],
  },
  {
    id: "crystal-tower",
    name: "Crystal Tower Lamp",
    description:
      "STL files for a stunning crystal tower that can hold an LED. Includes assembly instructions.",
    price: 15,
    type: "digital",
    category: "Decor",
    images: ["/products/crystal-1.jpg"],
  },
];
