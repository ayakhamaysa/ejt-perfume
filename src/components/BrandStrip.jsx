import { store } from "../data/store";

export default function BrandStrip() {
  return (
    <div className="border-y border-line bg-cream">
      <div className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap justify-center gap-x-10 gap-y-3" dir="ltr">
        {store.brands.map((brand) => (
          <span key={brand} className="font-latin text-lg tracking-[0.3em] text-ink/70">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
