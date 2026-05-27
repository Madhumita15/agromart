import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Trash2, Plus, Minus, ShoppingBag, ShieldCheck } from "lucide-react";

interface CartItem {
  id: number;
  titleKey: string;
  descKey: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { t } = useTranslation();

  // Production Mock Data State Array
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      titleKey: "cartPage.items.item1_title",
      descKey: "cartPage.items.item1_desc",
      price: 499,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=300&auto=format&fit=crop",
      quantity: 1,
    },
    {
      id: 2,
      titleKey: "cartPage.items.item2_title",
      descKey: "cartPage.items.item2_desc",
      price: 180,
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=300&auto=format&fit=crop",
      quantity: 2,
    },
  ]);

  // Quantity Management Handlers
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Memoized Calculated Pricing Info Summaries
  const totals = useMemo(() => {
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { itemCount, subtotal };
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-sm">
          <div className="w-20 h-20 bg-green-50 text-green-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{t("cartPage.empty")}</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Dynamic Cart Heading Counter */}
        <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-6">
          {t("cartPage.title", { count: totals.itemCount })}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Side Container: Active Product Row Stack */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl p-4 sm:p-5 border hover:shadow-md hover:shadow-yellow-200 border-yellow-100 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center transition-all duration-200 "
              >
                {/* Product Thumbnail Thumbnail Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                  <img src={item.image} alt="product" className="w-full h-full object-cover" />
                </div>

                {/* Main Identity Information Block */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug line-clamp-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400">{t(item.descKey)}</p>
                  
                  {/* Localized Price Display Tag */}
                  <div className="pt-2 flex items-baseline gap-2">
                    <span className="text-xl font-black text-gray-900">
                      ₹{t("cart.count", { count: item.price * item.quantity })}
                    </span>
                    {item.quantity > 1 && (
                      <span className="text-xs font-medium text-gray-400">
                        (₹{t("cart.count", { count: item.price })} / each)
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Controls Side Grouping Wrapper */}
                <div className="flex sm:flex-col justify-between items-center w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-0 border-gray-100">
                  {/* Quantity Inc / Dec Increment Group Toggle */}
                  <div className="flex items-center bg-gray-50 border border-green-200 rounded-xl p-1 shadow-inner">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1.5 hover:bg-white rounded-lg text-red-500 hover:text-green-700 transition-all active:scale-95 border border-transparent hover:border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700 cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-sm font-black text-gray-800 min-w-[24px] text-center">
                      {t("cart.count", { count: item.quantity })}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1.5 hover:bg-white rounded-lg text-green-500 hover:text-green-700 transition-all active:scale-95 border border-transparent hover:border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700 cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Remove Item Button Wrapper */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-red-600 transition-colors py-2 px-3 sm:px-2 rounded-xl hover:bg-red-50/50 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">{t("cartPage.remove")}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Right Side Container: Dynamic Checkout Price Summary Card */}
          <div className="space-y-4 sticky top-6">
            <div className="bg-white rounded-2xl  border border-green-100 shadow-sm overflow-hidden">
              <div className="p-4 sm:p-5 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-xs font-black uppercase tracking-wider text-gray-400">
                  {t("cartPage.summaryTitle")}
                </h2>
              </div>

              <div className="p-4 sm:p-5 space-y-4 ">
                {/* Price Item Mapping */}
                <div className="flex justify-between text-sm font-medium text-gray-600">
                  <span>{t("cartPage.price")} ({t("cart.count", { count: totals.itemCount })} items)</span>
                  <span className="font-bold text-gray-900">₹{t("cart.count", { count: totals.subtotal })}</span>
                </div>

                {/* Logistics Freight Row Block */}
                <div className="flex justify-between text-sm font-medium text-gray-600 pb-4 border-b border-dashed border-gray-200">
                  <span>{t("cartPage.delivery")}</span>
                  <span className="font-extrabold text-green-700 tracking-wide">{t("cartPage.free")}</span>
                </div>

                {/* Final Composite Total Calculation Row */}
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-base font-black text-gray-900">{t("cartPage.total")}</span>
                  <span className="text-2xl font-black text-green-700">
                    ₹{t("cart.count", { count: totals.subtotal })}
                  </span>
                </div>

                {/* Checkout Interactive Action CTA Component */}
                <button 
                  type="button"
                  className="w-full mt-4 bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-yellow-400/20 hover:shadow-lg transition-all active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-yellow-400/30 cursor-pointer"
                >
                  {t("cartPage.checkoutBtn")}
                </button>
              </div>
            </div>

            {/* Platform Security Verification Seal Tag */}
            <div className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-400 justify-center">
              <ShieldCheck className="w-4 h-4 text-green-700 flex-shrink-0" />
              <span>100% Safe and Secure Payments Guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Cart;