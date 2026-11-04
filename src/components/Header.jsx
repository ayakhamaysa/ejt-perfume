import { store } from "../data/store";
import Logo from "./Logo";

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-20 bg-page/95 backdrop-blur border-b border-line">
      <p className="bg-ink text-cream text-center text-xs py-2">{store.announcement}</p>

      <div className="max-w-6xl mx-auto px-5 h-20 grid grid-cols-3 items-center">
        <a href="#products" className="justify-self-start font-latin text-lg tracking-[0.15em] text-muted hover:text-gold" dir="ltr">Shopping</a>

        <Logo />

        <button
          onClick={onOpenCart}
          className="justify-self-end flex items-center gap-2 border border-gold/40 text-gold rounded-full px-4 py-2 hover:bg-gold hover:text-white transition"
        >
          <BagIcon />
          <span className="font-latin text-lg">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
