import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Trash2, ShoppingCart, Heart, CheckCircle2, XCircle } from "lucide-react";

interface WishlistItem {
  id: number;
  titleKey: string;
  price: number;
  rating: number;
  image: string;
  inStock: boolean;
}

const Wishlist: React.FC = () => {
  const { t } = useTranslation();

  // Production Quality E-Commerce Mock Dataset
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 101,
      titleKey: "wishlistPage.items.item1_title",
      price: 349,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 102,
      titleKey: "wishlistPage.items.item2_title",
      price: 125,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 103,
      titleKey: "wishlistPage.items.item3_title",
      price: 599,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=300&auto=format&fit=crop",
      inStock: false,
    },
  ]);

  const removeItem = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item: WishlistItem) => {
    console.log("Item pushed to application global cart state context:", item);
    // Add your application's cart global dispatch actions here
  };

  if (wishlistItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-sm">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Heart className="w-10 h-10 fill-current" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{t("wishlistPage.empty")}</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Wishlist Header Badge */}
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200/60">
          <Heart className="w-7 h-7 text-red-700 fill-red-700" />
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            {t("wishlistPage.title", { count: wishlistItems.length })}
          </h1>
        </div>

        {/* Dynamic Grid: Multi-Device Fluid Layout (1 col -> 2 cols -> 3 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between overflow-hidden relative group transition-all duration-300 hover:shadow-md hover:border-gray-200/80"
            >
              
              {/* Top Row Visual Section Wrapper */}
              <div>
                {/* Product Thumbnail Window */}
                <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Wishlist Item" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Delete / Clear Action Absolute Float Pin */}
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-gray-400 hover:text-red-600 shadow-sm transition-all active:scale-90 hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Meta Copy Blocks */}
                <div className="p-5 space-y-2">
                  {/* Stock Inventory Status Indicators */}
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    {item.inStock ? (
                      <span className="text-green-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {t("wishlistPage.inStock")}
                      </span>
                    ) : (
                      <span className="text-red-500 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> {t("wishlistPage.outOfStock")}
                      </span>
                    )}
                  </div>

                  {/* Localized Item Description Label Header */}
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-green-700 transition-colors duration-150">
                    {t(item.titleKey)}
                  </h3>

                  {/* Rating Badge component */}
                  <div className="flex items-center gap-1 text-xs font-black bg-gray-50 border border-gray-100 rounded-lg px-2 py-0.5 w-max text-gray-600">
                    <span>★</span>
                    <span>{t("cart.count", { count: item.rating })}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Trigger Actions Area */}
              <div className="p-5 pt-0 border-t border-gray-50 mt-4 flex items-center justify-between gap-4">
                {/* Dynamic Price Display Render Engine */}
                <span className="text-xl font-black text-gray-900 tracking-tight">
                  ₹{t("cart.count", { count: item.price })}
                </span>

                {/* Primary Add To Cart Button Component */}
                <button
                  type="button"
                  disabled={!item.inStock}
                  onClick={() => handleAddToCart(item)}
                  className={`flex items-center justify-center gap-2 font-bold text-sm py-3 px-4 rounded-xl transition-all active:scale-[0.97] focus:outline-none focus:ring-4 cursor-pointer ${
                    item.inStock
                      ? "bg-gradient-to-r from-green-700 to-emerald-600 hover:from-green-800 hover:to-emerald-700 text-white shadow-md shadow-green-700/10 focus:ring-green-700/30"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{t("wishlistPage.addToCart")}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Wishlist;