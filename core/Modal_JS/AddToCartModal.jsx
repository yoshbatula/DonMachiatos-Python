import React, { useState } from "react";
import AddToCartModal from "./AddToCartModal";

export default function MenuPage() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const openProductModal = (p) => {
    setProduct(p);
    setOpen(true);
  };

  const products = [
    {
      name: "Caramel Macchiatos",
      subtitle: "Chilled milk, espresso, and caramel syrup.",
      basePrice: 39,
      imageUrl: "/core/images/9 1.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f1f1f1] text-gray-800 font-sans">
      {/* HEADER */}
      <header className="relative w-full h-44 md:h-48 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-black to-[#0b0b0b]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent"></div>

        <div className="relative mx-auto max-w-7xl h-full flex items-center justify-between px-10">
          <div className="shrink-0">
            <img
              src="/core/images/logo don machos.png"
              alt="Don Machos Logo"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full"
            />
          </div>

          <div className="flex-1 text-center px-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-none tracking-tight">
              Your Cup of Happiness
            </h1>
            <p className="mt-2 text-[10px] md:text-xs text-gray-300 tracking-[0.22em] uppercase">
              THE PERFECT CUP, THE PERFECT VIBE. COME EXPERIENCE THE DON MACHOS COMMUNITY.
            </p>
          </div>

          <div className="shrink-0 self-end -mb-10 md:-mb-12">
            <img
              src="/core/images/Cup with hand.png"
              alt="Don Machos Cup"
              className="w-40 md:w-52 object-contain"
            />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-6xl px-6 py-6">
        <h2 className="text-5xl text-black font-extrabold mb-6">DON MACHOS MENU</h2>

        <div className="flex gap-8">
          {/* SIDEBAR */}
          <aside className="w-48 shrink-0">
            <div className="bg-white rounded-3xl p-4 shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-2">Menu</h3>
              <hr className="border-gray-200 mb-4" />

              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                  NEW
                </div>
                <p className="mt-2 text-sm text-gray-700">What's New</p>
              </div>

              <div className="max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain">
                <nav className="flex flex-col items-center gap-6 pb-4">
                  {["Coffee", "Frappe", "Coolers", "Cookies"].map((cat) => (
                    <button key={cat} className="flex flex-col items-center gap-2" type="button">
                      <img src="/core/images/9 1.svg" alt={cat} className="w-20 h-20 object-contain" />
                      <span className="text-sm font-medium">{cat}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-4 text-2xl text-gray-300">&#709;</div>
            </div>
          </aside>

          {/* MENU GRID */}
          <section className="flex-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <div className="h-[calc(60vh-128px)] overflow-y-auto pr-2">
                <div className="grid grid-cols-3 gap-6">
                  {products.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => openProductModal(p)}
                      className="w-full text-left rounded-2xl p-4 flex items-center gap-4 bg-[#F7F7F7]
                               hover:bg-[#EFEFEF] active:scale-[0.99] transition
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="w-24 h-24 object-contain shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-base font-extrabold leading-snug uppercase">
                          {p.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{p.subtitle}</p>
                        <p className="text-xl font-extrabold mt-3">₱{p.basePrice}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* MODAL */}
      <AddToCartModal
        open={open}
        onClose={() => setOpen(false)}
        product={product}
        onAddToCart={(payload) => {
          console.log("Added:", product, payload);
        }}
      />
    </div>
  );
}
