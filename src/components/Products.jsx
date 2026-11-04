import { useState } from "react";
import { categories, products } from "../data/store";
import ProductCard from "./ProductCard";

export default function Products({ onOpen, onQuickAdd }) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  // Filter by category, then by the search text
  const visible = products
    .filter((p) => category === "all" || p.category.includes(category))
    .filter((p) => {
      const text = `${p.name} ${p.nameAr} ${p.brand}`.toLowerCase();
      return text.includes(search.trim().toLowerCase());
    });

  return (
    <section id="products" className="scroll-mt-28 max-w-6xl mx-auto px-5 py-16">
      <h2 className="text-center font-latin text-ink text-4xl tracking-[0.3em]" dir="ltr">COLLECTION</h2>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-10">
        <div className="flex gap-2 overflow-x-auto max-w-full">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`shrink-0 px-5 py-2 rounded-full border font-latin text-lg tracking-wide transition ${
                category === c.id ? "bg-gold border-gold text-white" : "border-line hover:border-gold"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search perfume or brand"
          className="w-full md:w-72 border border-line rounded-full px-5 py-2.5 focus:outline-none focus:border-gold"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 mt-10">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onOpen={onOpen} onQuickAdd={onQuickAdd} />
        ))}
      </div>

      {visible.length === 0 && <p className="text-center text-muted py-16">ما في نتائج</p>}
    </section>
  );
}
