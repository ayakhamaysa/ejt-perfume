import { store } from "../data/store";
import Logo from "./Logo";

export default function Success({ order, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-ink/50 flex items-center justify-center p-5">
      <div className="bg-page w-full max-w-sm rounded-3xl p-8 text-center">
        <Logo />
        <div className="w-14 h-14 mx-auto mt-6 rounded-full border border-gold text-gold text-2xl flex items-center justify-center">✓</div>
        <h2 className="text-2xl font-bold mt-4">تم استلام طلبك</h2>
        <p className="text-muted mt-2">
          شكراً {order.name}، رح نتواصل معك على الرقم {" "}
          <span dir="ltr">{order.phone}</span> لتأكيد التوصيل.
        </p>
        <p className="mt-4">
          المجموع: <span className="font-latin text-2xl">{order.total}</span> {store.currency}
        </p>

        <button onClick={onClose} className="w-full mt-5 bg-gold text-white rounded-full py-3 font-bold">
          متابعة التسوق
        </button>
      </div>
    </div>
  );
}
