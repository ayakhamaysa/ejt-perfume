import { store } from "../data/store";

export default function ProductCard({ product, onOpen, onQuickAdd }) {
  // Products with options (like a scent type) open the product page,
  // so the customer chooses first. Others go straight to the cart.
  function handlePlus() {
    if (product.options) onOpen(product);
    else onQuickAdd(product);
  }

  return (
    <div className="group text-right">
      <button onClick={() => onOpen(product)} className="block w-full relative overflow-hidden rounded-2xl bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-page/90 text-gold text-xs px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </button>

      <button onClick={() => onOpen(product)} className="block w-full text-right">
        <p className="font-latin text-gold tracking-[0.2em] text-xs mt-4 uppercase" dir="ltr">{product.brand}</p>
        <h3 className="font-latin text-xl mt-1" dir="ltr">{product.name}</h3>
        <p className="text-sm text-muted">{product.nameAr}</p>
      </button>

      <div className="flex items-center justify-between mt-2">
        <p className="font-bold">
          <span className="font-latin text-xl">{product.price}</span> {store.currency}
        </p>
        <button
          onClick={handlePlus}
          aria-label="إضافة للسلة"
          className="w-9 h-9 rounded-full border border-gold text-gold text-xl leading-none hover:bg-gold hover:text-white transition"
        >
          +
        </button>
      </div>
    </div>
  );
}
