import { store } from "../data/store";

export default function CartDrawer({ lines, onClose, onChange, onCheckout }) {
  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);

  return (
    <div className="fixed inset-0 z-40 bg-ink/40" onClick={onClose}>
      <aside
        className="absolute top-0 bottom-0 left-0 w-full max-w-md bg-page flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="text-2xl font-bold">السلة</h2>
          <button onClick={onClose} aria-label="إغلاق" className="text-2xl text-muted">×</button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted gap-2">
            <p className="text-lg">السلة فاضية</p>
            <button onClick={onClose} className="text-gold underline">رجوع للمتجر</button>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-6 divide-y divide-line">
            {lines.map((line) => (
              <li key={line.key} className="flex gap-4 py-4">
                <img src={line.product.image} alt="" className="w-20 h-24 object-cover rounded-xl" />
                <div className="flex-1 min-w-0">
                  <p className="font-latin text-lg leading-tight" dir="ltr">{line.product.name}</p>
                  {line.option && <p className="text-xs text-muted mt-1" dir="ltr">{line.option}</p>}
                  <p className="mt-1 text-sm">
                    <span className="font-latin text-base">{line.product.price * line.quantity}</span> {store.currency}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-line rounded-full" dir="ltr">
                      <button onClick={() => onChange(line.key, line.quantity - 1)} className="w-8 h-8">−</button>
                      <span className="font-latin w-6 text-center">{line.quantity}</span>
                      <button onClick={() => onChange(line.key, line.quantity + 1)} className="w-8 h-8">+</button>
                    </div>
                    <button onClick={() => onChange(line.key, 0)} className="text-xs text-muted hover:text-red-700">
                      حذف
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {lines.length > 0 && (
          <div className="border-t border-line p-6">
            <div className="flex justify-between text-lg">
              <span>المجموع</span>
              <span><span className="font-latin text-2xl">{subtotal}</span> {store.currency}</span>
            </div>
            <p className="text-xs text-muted mt-1">التوصيل بينحسب حسب المنطقة</p>
            <button onClick={onCheckout} className="w-full mt-4 bg-gold text-white rounded-full py-4 font-bold hover:bg-gold-dark transition">
              إتمام الطلب
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
