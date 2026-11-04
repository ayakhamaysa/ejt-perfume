import { store } from "../data/store";

export default function Hero() {
  return (
    // Full-screen photo under the header, no text on top
    <section className="relative h-[calc(100svh-7rem)] min-h-[480px] overflow-hidden">
      {/* Wide image on laptops, tall image on phones */}
      <picture>
        <source media="(min-width: 768px)" srcSet={store.heroImageDesktop} />
        <img
          src={store.heroImageMobile}
          alt="عطور"
          className="absolute inset-0 w-full h-full object-cover object-[50%_42%]"
        />
      </picture>

      {/* Hint to scroll down */}
      <a
        href="#products"
        aria-label="انزلي للعطور"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/85 text-gold flex items-center justify-center shadow animate-bounce"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
