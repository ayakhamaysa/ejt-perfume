import { useState } from "react";
import { store } from "../data/store";

export default function ProductModal({ product, onClose, onAdd }) {
  const [option, setOption] = useState(product.options ? null : "");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  function add() {
    if (option === null) return setError("اختاري النوع أول");
    onAdd(product, option, quantity);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-40 bg-ink/50 flex items-end md:items-center justify-center" onClick={onClose}>
      <div
        className="bg-page w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={product.image} alt={product.name} className="w-full aspect-[4/5] object-cover md:rounded-r-3xl" />

        <div className="p-6 md:p-8 flex flex-col">
          <button onClick={onClose} aria-label="إغلاق" className="self-end text-2xl text-muted">×</button>

          <p className="font-latin text-gold tracking-[0.2em] text-sm uppercase" dir="ltr">{product.brand}</p>
          <h2 className="font-latin text-3xl mt-1" dir="ltr">{product.name}</h2>
          <p className="text-muted">{product.nameAr}</p>

          <p className="mt-4 text-2xl font-bold">
            <span className="font-latin text-3xl">{product.price}</span> {store.currency}
          </p>
          <p className="text-sm text-muted mt-1" dir="ltr">{product.size}</p>

          <p className="mt-5 leading-relaxed">{product.description}</p>

          {product.options && (
            <div className="mt-6">
              <p className="text-sm font-bold mb-2">النوع</p>
              <div className="flex flex-wrap gap-2">
                {product.options.map((o) => (
                  <button
                    key={o}
                    onClick={() => { setOption(o); setError(""); }}
                    className={`px-4 py-2 rounded-full border text-sm transition ${
                      option === o ? "bg-gold border-gold text-white" : "border-line hover:border-gold"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mt-6">
            <p className="text-sm font-bold">الكمية</p>
            <div className="flex items-center border border-line rounded-full" dir="ltr">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10">−</button>
              <span className="font-latin text-xl w-8 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10">+</button>
            </div>
          </div>

          {error && <p className="text-red-700 text-sm mt-4">{error}</p>}

          <button onClick={add} className="mt-8 w-full bg-gold text-white rounded-full py-4 font-bold hover:bg-gold-dark transition">
            أضيفي للسلة · <span className="font-latin">{product.price * quantity}</span> {store.currency}
          </button>
        </div>
      </div>
    </div>
  );
}
