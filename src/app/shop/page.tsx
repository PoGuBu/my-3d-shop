"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, ProductType } from "@/data/products";

type Filter = "all" | ProductType;

export default function ShopPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.type === filter);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "physical", label: "Physical Prints" },
    { value: "digital", label: "Digital STLs" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Shop</h1>
        <p className="mt-2 text-zinc-400">
          Browse physical 3D prints and downloadable STL files
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              filter === f.value
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-zinc-500">
        Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 py-16 text-center">
          <p className="text-zinc-400">No products found for this filter.</p>
        </div>
      )}
    </div>
  );
}
