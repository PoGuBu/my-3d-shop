"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = product.images && product.images.length > 0 ? product.images : [];

  return (
    <div className="space-y-8">
      {/* Back link */}
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
      >
        ← Back to Shop
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div className="space-y-4">
          {/* Main big image */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
            {images.length > 0 ? (
              <Image
                src={images[selectedIndex]}
                alt={`${product.name} - photo ${selectedIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <span className="text-7xl opacity-30">
                  {product.type === "physical" ? "🖨️" : "📁"}
                </span>
              </div>
            )}

            <div className="absolute left-4 top-4">
              <span
                className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                  product.type === "physical"
                    ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30"
                    : "bg-sky-500/20 text-sky-400 ring-1 ring-sky-500/30"
                }`}
              >
                {product.type === "physical" ? "Physical Print" : "Digital STL"}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                    selectedIndex === index
                      ? "border-violet-500"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-500">
            {product.category}
          </div>

          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {product.name}
          </h1>

          <p className="mb-6 text-lg text-zinc-400 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8">
            <span className="text-3xl font-bold text-white">
  {product.price} zł
</span>
            {product.type === "digital" && (
              <span className="ml-3 text-sm text-zinc-500">Instant download</span>
            )}
            {product.type === "physical" && (
              <span className="ml-3 text-sm text-zinc-500">+ shipping</span>
            )}
          </div>

          {product.buyUrl ? (
  <a
    href={product.buyUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="mb-4 inline-block w-full rounded-xl bg-violet-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 hover:shadow-violet-500/40 sm:w-auto sm:px-10"
  >
    {product.type === "digital" ? "Buy & Download" : "Buy Print"}
  </a>
) : (
  <button
    disabled
    className="mb-4 w-full rounded-xl bg-zinc-700 px-6 py-4 text-base font-semibold text-zinc-400 cursor-not-allowed sm:w-auto sm:px-10"
  >
    Coming soon
  </button>
)}
          <button className="mb-4 w-full rounded-xl bg-violet-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 hover:shadow-violet-500/40 sm:w-auto sm:px-10">
            {product.type === "digital" ? "Buy & Download" : "Buy Print"}
          </button>

          <p className="text-sm text-zinc-500">
            {product.type === "digital"
              ? "You'll receive a download link immediately after purchase."
              : "Ships within 5–7 business days. Tracking included."}
          </p>

          {/* Extra info */}
          <div className="mt-10 space-y-4 border-t border-zinc-800 pt-8">
            <div className="flex gap-3">
              <span className="text-zinc-500">Type:</span>
              <span className="text-zinc-300 capitalize">{product.type}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-zinc-500">Category:</span>
              <span className="text-zinc-300">{product.category}</span>
            </div>
            {product.type === "digital" && (
              <div className="flex gap-3">
                <span className="text-zinc-500">Format:</span>
                <span className="text-zinc-300">
                  STL (pre-supported available)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}