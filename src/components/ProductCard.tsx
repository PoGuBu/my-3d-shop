import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images?.[0];

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-xl hover:shadow-violet-500/5"
    >
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden bg-zinc-800">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <span className="text-4xl opacity-40">
              {product.type === "physical" ? "🖨️" : "📁"}
            </span>
          </div>
        )}

        {/* Type badge */}
        <div className="absolute left-3 top-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              product.type === "physical"
                ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30"
                : "bg-sky-500/20 text-sky-400 ring-1 ring-sky-500/30"
            }`}
          >
            {product.type === "physical" ? "Physical" : "Digital STL"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
          {product.category}
        </div>
        <h3 className="mb-2 text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
          {product.name}
        </h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm text-zinc-400">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">{product.price} zł</span>
          <span className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 group-hover:bg-violet-600 group-hover:text-white transition-colors">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}