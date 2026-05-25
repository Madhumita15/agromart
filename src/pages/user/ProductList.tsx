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
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../typescript/interface/product.interface";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [wishList, setWishList] = useState<number[]>([])


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

  const handleToggleWishList = (id: number)=>{
    setWishList((prev)=> (
      prev.includes(id) ? prev.filter((item)=> item !== id) : [...prev, id]

    ))
  }

  return (
    <>
      <ProductSlider />
      <section className="w-full py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-2 text-balance">
              {t("productList.titleMain")} <br className="hidden sm:block" />
              {t("productList.titleDirectly")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                {t("productList.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              {t("productList.description")}
            </p>
          </div>

          {/* ক্যাটাগরি সেকশনের বাটন স্টাইলিং কাস্টমাইজড */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {productCategory?.map((category) => (
              <button
                className="bg-yellow-400 hover:bg-green-600 text-black hover:text-white px-6 py-2.5 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                key={category.id}
              >
                {t(
                  `categories.${category.name.toLowerCase().replace(/[^a-z]/g, "")}`,
                )}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-xl  font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {t(product.name)}
                    </h3>
                    <button onClick={()=> handleToggleWishList(product.id)}>{wishList.includes(product.id) ? <FavoriteIcon className="text-red-700 "  /> : <Heart className="text-red-700"/>} </button>
                    
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
                    onClick={()=> navigate(`/productById/${product.id}`,  {
                      state: product
                    })}
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
        </div>
      </section>
    </>
  );
};

export default ProductList;
