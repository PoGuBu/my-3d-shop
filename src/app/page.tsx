import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-950/40 px-6 py-16 sm:px-12 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
        
        <div className="relative max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            Physical prints + Digital STLs
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Unique 3D designs
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              ready for you
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-zinc-400 max-w-lg">
            High-quality 3D printed objects shipped to your door, or download
            the STL files and print them yourself. Fresh designs, careful
            craftsmanship.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 hover:shadow-violet-500/40"
            >
              Browse Shop
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800"
            >
              Custom Request
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Featured Designs</h2>
            <p className="mt-1 text-zinc-400">Hand-picked favorites</p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-violet-400 hover:text-violet-300 transition"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div className="mb-3 text-2xl">🖨️</div>
          <h3 className="mb-2 font-semibold text-white">Physical Prints</h3>
          <p className="text-sm text-zinc-400">
            Carefully printed, cleaned and shipped. Ready to display or use.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div className="mb-3 text-2xl">📁</div>
          <h3 className="mb-2 font-semibold text-white">Digital STL Files</h3>
          <p className="text-sm text-zinc-400">
            Instant download after purchase. Print as many as you want.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div className="mb-3 text-2xl">✨</div>
          <h3 className="mb-2 font-semibold text-white">Custom Work</h3>
          <p className="text-sm text-zinc-400">
            Need something unique? Reach out for commissions.
          </p>
        </div>
      </section>
    </div>
  );
}
