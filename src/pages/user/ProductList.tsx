import ProductSlider from "../../components/ProductSlider";
import productimg1 from "../../assets/cardimg1.jpg";
import productimg2 from "../../assets/cardimg7.jpg";
import productimg3 from "../../assets/cardimg6.jpg";
import productimg4 from "../../assets/cardimg5.jpg";
import productimg5 from "../../assets/cardimg4.jpg";
import productimg6 from "../../assets/cardimg12.jpg";
// import productimg7 from "../../assets/cardimg8.jpg";
// import productimg8 from "../../assets/cardimg2.jpg";
import { Button } from "@mui/material";
import { Eye, Heart, ShoppingCart, SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../typescript/interface/product.interface";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [wishList, setWishList] = useState<number[]>([]);

  const productCategory = [
    {
      id: 1,
      name: "vegetables",
    },
    {
      id: 2,
      name: "rice",
    },
    {
      id: 3,
      name: "crops",
    },
    {
      id: 4,
      name: "seeds",
    },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "products.potatoes",
      originalPrice: 30,
      currentPrice: 20,
      discount: 10,
      description: "products.potatoesDesc",
      image: productimg1,
    },
    {
      id: 2,
      name: "products.eggplant",
      originalPrice: 20,
      currentPrice: 50,
      discount: 20,
      description: "products.eggplantDesc",
      image: productimg2,
    },
    {
      id: 3,
      name: "products.tomato",
      originalPrice: 100,
      currentPrice: 80,
      discount: 20,
      description: "products.tomatoDesc",
      image: productimg3,
    },
    {
      id: 4,
      name: "products.pointedGourd",
      originalPrice: 30,
      currentPrice: 20,
      discount: 10,
      description: "products.pointedGourdDesc",
      image: productimg4,
    },
    {
      id: 5,
      name: "products.okra",
      originalPrice: 30,
      currentPrice: 20,
      discount: 0, // Set to 0 if no discount
      description: "products.okraDesc",
      image: productimg5,
    },
    {
      id: 6,
      name: "products.bitterGourd",
      originalPrice: 30,
      currentPrice: 60,
      discount: 0,
      description: "products.bitterGourdDesc",
      image: productimg6,
    },
  ];

  const handleToggleWishList = (id: number) => {
    setWishList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <>
      <ProductSlider />
      <section className="w-full py-12 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 text-balance">
              {t("productList.titleMain")} <br className="hidden sm:block" />
              {t("productList.titleDirectly")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                {t("productList.titleHighlight")}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              {t("productList.description")}
            </p>
          </div>

          {/* Main Content Layout Wrapper */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Sidebar Filters */}
            <div className="w-full lg:w-[320px] bg-white p-6 rounded-2xl shadow-md border border-gray-100 lg:sticky lg:top-4 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                <SlidersHorizontal className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">{t("productListFilters.title")}</h3>
              </div>

              {/* 1. Search Bar */}
              <div className="space-y-2">
                <label htmlFor="search" className="text-sm font-semibold text-gray-700">
                  {t("productListFilters.searchLabel")}
                </label>
                <input 
                  type="text"
                  className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm transition-all focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100" 
                  placeholder={t("productListFilters.searchPlaceholder")}  
                  name="search" 
                  id="search" 
                />
              </div>

              {/* 2. Sorting */}
              <div className="space-y-2">
                <label htmlFor="sort" className="text-sm font-semibold text-gray-700">
                  {t("productListFilters.sortLabel")}
                </label>
                <select
                  name="sort"
                  id="sort"
                  className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm transition-all focus:border-green-500 focus:bg-white"
                >
                  <option value="">{t("productListFilters.sortDefault")}</option>
                  <option value="asc">{t("productListFilters.sortAsc")}</option>
                  <option value="desc">{t("productListFilters.sortDesc")}</option>
                  <option value="price-low-high">{t("productListFilters.sortLowHigh")}</option>
                  <option value="price-high-low">{t("productListFilters.sortHighLow")}</option>
                </select>
              </div>

              {/* 3. Category Filter */}
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-semibold text-gray-700">
                  {t("productListFilters.categoryLabel")}
                </label>
                <select
                  name="category"
                  id="category"
                  className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm transition-all focus:border-green-500 focus:bg-white"
                >
                  <option value="">{t("productListFilters.allCategories")}</option>
                  {productCategory?.map((category) => (
                    <option key={category.id} value={category.name}>
                      {t(`categories.${category.name.toLowerCase()}`)}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Price Range Filter */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-700">
                    {t("productListFilters.priceRangeLabel")}
                  </label>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                    {t("productListFilters.maxPrice", { val: 150 })}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="150" 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>₹0</span>
                  <span>₹150</span>
                </div>
              </div>

              {/* 5. Availability Checkboxes */}
              <div className="space-y-2 pt-2">
                <label className="text-sm font-semibold text-gray-700 block">
                  {t("productListFilters.availabilityLabel")}
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded text-green-600 accent-green-600 border-gray-300 focus:ring-green-500" />
                    <span>{t("productListFilters.inStock")}</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded text-green-600 accent-green-600 border-gray-300 focus:ring-green-500" />
                    <span>{t("productListFilters.onSale")}</span>
                  </label>
                </div>
              </div>

              <button className="w-full mt-2 py-2.5 text-sm font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl">
                {t("productListFilters.clearBtn")}
              </button>
            </div>

            {/* Products Layout Section - Responsive Grid Layout (Max 2 products side-by-side) */}
            <div className="flex-1 w-full flex flex-col gap-8">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={product.image}
                        alt={t(product.name)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.discount && (
                        <button className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                          {product.discount}% {t(`products.off`)}
                        </button>
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6">
                      <div className="flex justify-between">
                        {/* Product Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {t(product.name)}
                        </h3>
                        <button onClick={() => handleToggleWishList(product.id)}>
                          {wishList.includes(product.id) ? (
                            <FavoriteIcon className="text-red-700" />
                          ) : (
                            <Heart className="text-red-700" />
                          )}
                        </button>
                      </div>

                      {/* Price Section */}
                      <div className="flex items-center gap-3 mb-4">
                        {product.originalPrice !== product.currentPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-green-600">
                          ₹{product.currentPrice}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                        {t(product.description)}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          onClick={() =>
                            navigate(`/productById/${product.id}`, {
                              state: product,
                            })
                          }
                          variant="outlined"
                          className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-xl font-semibold transition-all duration-300 group/btn"
                        >
                          <Eye className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          {t(`products.seemore`)}
                        </Button>

                        <Button
                          sx={{ color: "white" }}
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          {t(`products.addToCart`)}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fully Responsive Pagination UI Elements */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-4 w-full">
                <button className="bg-green-600 hover:bg-white hover:text-black border-2  hover:border-2 hover:border-green-700 text-white font-medium rounded-xl px-5 py-2 text-sm transition-colors shadow-sm hover:shadow active:scale-95 duration-200">
                  {t("pagination.prev")}
                </button>
                <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-xl">
                  {t("pagination.pageIndicator", { count: 1 })}
                </span>
                <button className="bg-red-600 hover:bg-white hover:text-black border-2 hover:border-2 hover:border-red-700 text-white hover:red-green-700 font-medium rounded-xl px-5 py-2 text-sm transition-colors shadow-sm hover:shadow active:scale-95 duration-200">
                  {t("pagination.next")}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
