import { useState } from "react";
import { store, deliveryZones } from "../data/store";

export default function Checkout({ lines, onClose, onDone }) {
  const [form, setForm] = useState({ name: "", phone: "", zone: "", address: "", notes: "" });
  const [error, setError] = useState("");

  const zone = deliveryZones.find((z) => z.name === form.zone);
  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const delivery = zone ? zone.price : 0;
  const total = subtotal + delivery;

  // One function updates any field by its name
  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.zone || !form.address.trim()) {
      return setError("عبّي الاسم والرقم والمنطقة والعنوان");
    }
    onDone({ ...form, subtotal, delivery, total });
  }

  const field = "w-full border border-line rounded-xl px-4 py-3 focus:outline-none focus:border-gold";

  return (
    <div className="fixed inset-0 z-50 bg-ink/50 flex items-end md:items-center justify-center" onClick={onClose}>
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="bg-page w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl p-6 md:p-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">إتمام الطلب</h2>
          <button type="button" onClick={onClose} aria-label="إغلاق" className="text-2xl text-muted">×</button>
        </div>

        <div className="grid gap-3 mt-6">
          <input id="name" value={form.name} onChange={update("name")} placeholder="الاسم الكامل" className={field} />
          <input id="phone" value={form.phone} onChange={update("phone")} placeholder="رقم الجوال" inputMode="tel" className={field} />
          <select id="zone" value={form.zone} onChange={update("zone")} className={field}>
            <option value="">المنطقة</option>
            {deliveryZones.map((z) => (
              <option key={z.name} value={z.name}>{z.name} · توصيل {z.price} {store.currency}</option>
            ))}
          </select>
          <input id="address" value={form.address} onChange={update("address")} placeholder="المدينة والعنوان بالتفصيل" className={field} />
          <textarea id="notes" value={form.notes} onChange={update("notes")} placeholder="ملاحظات (اختياري)" rows={2} className={field} />
        </div>

        {/* Summary */}
        <div className="bg-cream rounded-2xl p-5 mt-6 space-y-2">
          <Row label={`المنتجات (${lines.reduce((s, l) => s + l.quantity, 0)})`} value={subtotal} />
          <Row label="التوصيل" value={zone ? delivery : "حسب المنطقة"} />
          <div className="border-t border-gold/30 pt-2">
            <Row label="المجموع" value={total} big />
          </div>
          <p className="text-xs text-muted">الدفع عند الاستلام</p>
        </div>

        {error && <p className="text-red-700 text-sm mt-4">{error}</p>}

        <button className="w-full mt-5 bg-gold text-white rounded-full py-4 font-bold hover:bg-gold-dark transition">
          تأكيد الطلب
        </button>
      </form>
    </div>
  );
}

function Row({ label, value, big }) {
  return (
    <div className={`flex justify-between ${big ? "text-lg font-bold" : ""}`}>
      <span>{label}</span>
      <span>
        {typeof value === "number" ? (
          <>
            <span className={`font-latin ${big ? "text-2xl" : "text-lg"}`}>{value}</span> {store.currency}
          </>
        ) : (
          <span className="text-muted text-sm">{value}</span>
        )}
      </span>
    </div>
  );
}
