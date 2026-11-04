import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStrip from "./components/BrandStrip";
import Features from "./components/Features";
import Products from "./components/Products";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Contact from "./components/Contact";

export default function App() {
  // The cart: { "product-id|option": { key, product, option, quantity } }
  const [cart, setCart] = useState({});
  const [openProduct, setOpenProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [order, setOrder] = useState(null);
  const [toast, setToast] = useState("");

  const lines = Object.values(cart);
  const count = lines.reduce((sum, l) => sum + l.quantity, 0);

  function addToCart(product, option, quantity) {
    const key = `${product.id}|${option}`;
    const current = cart[key]?.quantity || 0;
    setCart({ ...cart, [key]: { key, product, option, quantity: current + quantity } });
    setToast(product.name);
    setTimeout(() => setToast(""), 2000);
  }

  function changeQuantity(key, quantity) {
    const next = { ...cart };
    if (quantity <= 0) delete next[key];
    else next[key] = { ...next[key], quantity };
    setCart(next);
  }

  function finishOrder(details) {
    setOrder(details);
    setCart({});
    setCheckoutOpen(false);
    setCartOpen(false);
  }

  return (
    <>
      <Header cartCount={count} onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <BrandStrip />
      <Products onOpen={setOpenProduct} onQuickAdd={(product) => addToCart(product, "", 1)} />
      <Features />
      <Contact />

      {openProduct && (
        <ProductModal product={openProduct} onClose={() => setOpenProduct(null)} onAdd={addToCart} />
      )}

      {cartOpen && (
        <CartDrawer
          lines={lines}
          onClose={() => setCartOpen(false)}
          onChange={changeQuantity}
          onCheckout={() => setCheckoutOpen(true)}
        />
      )}

      {checkoutOpen && <Checkout lines={lines} onClose={() => setCheckoutOpen(false)} onDone={finishOrder} />}

      {order && <Success order={order} onClose={() => setOrder(null)} />}

      {/* Small message after adding to cart */}
      {toast && (
        <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center px-5">
          <button
            onClick={() => { setToast(""); setCartOpen(true); }}
            className="bg-ink text-cream rounded-full px-6 py-3 shadow-xl text-sm"
          >
            ✓ انضاف <span dir="ltr">{toast}</span> للسلة · عرض السلة
          </button>
        </div>
      )}
    </>
  );
}
