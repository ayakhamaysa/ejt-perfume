import { store } from "../data/store";
import Logo from "./Logo";

export default function Contact() {
  return (
    <footer className="bg-cream mt-16">
      <div className="max-w-6xl mx-auto px-5 py-14 text-center">
        <Logo size="lg" />
        <p className="mt-3 text-muted">{store.arabicName}</p>

        <div className="grid gap-6 sm:grid-cols-3 mt-10 text-sm">
          <div>
            <p className="text-gold mb-1">العنوان</p>
            <p>{store.address}</p>
          </div>
          <div>
            <p className="text-gold mb-1">للتواصل</p>
            <p dir="ltr">{store.phone}</p>
          </div>
          <div>
            <p className="text-gold mb-1">إنستغرام</p>
            <a href={store.instagram} target="_blank" className="underline">ejt_perfume</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/20 py-5 text-center text-xs text-muted">
        تصميم وتطوير{" "}
        <a href="https://www.instagram.com/oneclick.ps" target="_blank" className="font-bold text-gold">
          One Click
        </a>
      </div>
    </footer>
  );
}
