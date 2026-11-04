import { store } from "../data/store";

export default function Logo({ size = "md" }) {
  const big = size === "lg";
  return (
    <div className="text-center leading-none" dir="ltr">
      <p className={`font-latin font-semibold text-gold tracking-[0.25em] ${big ? "text-5xl" : "text-3xl"}`}>
        {store.name}
      </p>
      <p className={`font-latin text-gold tracking-[0.5em] mt-1 ${big ? "text-sm" : "text-[10px]"}`}>
        {store.subtitle}
      </p>
    </div>
  );
}
