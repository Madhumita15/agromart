import { Button } from "@mui/material";
import { ChevronLeft, Heart, ShoppingBasket, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const ProductById = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [wishList, setWishList] = useState<number[]>([])
  const singleData = location.state;


   const handleToggleWishList = (id: number)=>{
    setWishList((prev)=> (
      prev.includes(id) ? prev.filter((item)=> item !== id) : [...prev, id]

    ))
  }
  

  // Optional fallback if no state is passed
  if (!singleData) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-600">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl mt-5 mb-5">

        <div className="flex flex-row justify-center text-lg mb-10">
            <NavLink to={"/"} className={"text-gray-500 hover:text-black"}> {t("singleProduct.home")}</NavLink>
            <NavLink to={"/about"} className={"flex flex-roe items-center text-gray-500 hover:text-black"}><ChevronLeft />{t("singleProduct.aboutUs")}</NavLink>
            <NavLink to={"/productlist"} className={"flex flex-roe items-center text-gray-500 hover:text-black "}><ChevronLeft /> {t("singleProduct.products")}</NavLink>
        </div>
      {/* Top Header Description Section */}
      <div className="text-center mb-12 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
          {t("singleProduct.title")}
        </h1>
        <p className="max-w-2xl mx-auto text-base text-gray-500">
          {t("singleProduct.smallDescription")}
        </p>
      </div>

      

      {/* Main Layout Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 md:p-12">
          
          {/* Image Container */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-50">
            <img
              src={singleData.image}
              alt={t(singleData.name)}
              className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
            />
            {singleData.discount && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                {singleData.discount}% {t(`products.off`)}
              </span>
            )}
          </div>

          {/* Content Container */}
          <div className="flex flex-col justify-between py-2">
            <div>
              <div className="flex justify-between">
                    {/* Product Title */}
                    <h2 className="text-xl  font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {t(singleData.name)}
                    </h2>
                    <button className="text-xl" onClick={()=> handleToggleWishList(singleData.id)}>{wishList.includes(singleData.id) ? <FavoriteIcon className="text-red-700 "  /> : <Heart className="text-red-700"/>} </button>
                    
                  </div>

              {/* Price Section */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-extrabold text-green-600">
                  ₹{singleData.currentPrice}
                </span>
                {singleData.originalPrice !== singleData.currentPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ₹{singleData.originalPrice}
                  </span>
                )}
              </div>

              <hr className="my-6 border-gray-100" />

              {/* Full Description */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                 {t("singleProduct.cardDescription")}
                </h4>
                <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                  {t(singleData.description)}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button
                variant="outlined"
                className="flex-1 py-3 border-2 border-red-600 text-red-600 hover:bg-red-500 hover:text-white hover:border-red-700 rounded-xl font-bold transition-all duration-300 normal-case text-base flex items-center justify-center gap-2"
              >
                <ShoppingBasket className="w-5 h-5" />
                {t("singleProduct.buyNow")}
              </Button>

              <Button
                variant="contained"
                className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl normal-case text-base flex items-center justify-center gap-2 border-0"
              >
                <ShoppingCart className="w-5 h-5" />
                {t(`products.addToCart`)}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductById;