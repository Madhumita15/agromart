import Slider from "../../components/Slider";
import Video from "../../components/Video";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@mui/material";
import productimg1 from "../../assets/cardimg1.jpg";
import productimg2 from "../../assets/cardimg7.jpg";
import productimg3 from "../../assets/cardimg6.jpg";
import productimg4 from "../../assets/cardimg5.jpg";
import productimg5 from "../../assets/cardimg4.jpg";
import productimg6 from "../../assets/cardimg12.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, User } from "lucide-react";
import user1img from "../../assets/user1.jpg";
import user2img from "../../assets/user2.jpg";
import user3img from "../../assets/user3.jpg";
import user4img from "../../assets/user4.jpg";
import user5img from "../../assets/user5.jpg";
import user6img from "../../assets/user6.jpg";
import user7img from "../../assets/user6.jpg";
import user8img from "../../assets/user5.jpg";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  review: string;
  rating: number;
}

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  discount?: number;
  description: string;
  image: string;
}


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
    description: "products.productspotatoesDesc",
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

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "testimonials.user1.name",
    image: user1img,
    review: "testimonials.user1.review",
    rating: 4,
  },
  {
    id: 2,
    name: "testimonials.user2.name",
    image: user2img,
    review: "testimonials.user2.review",
    rating: 5,
  },
  {
    id: 3,
    name: "testimonials.user3.name",
    image: user3img,
    review: "testimonials.user3.review",
    rating: 4,
  },
  {
    id: 4,
    name: "testimonials.user4.name",
    image: user4img,
    review: "testimonials.user4.review",
    rating: 5,
  },
  {
    id: 5,
    name: "testimonials.user5.name",
    image: user5img,
    review: "testimonials.user5.review",
    rating: 5,
  },
  {
    id: 6,
    name: "testimonials.user6.name",
    image: user6img,
    review: "testimonials.user6.review",
    rating: 5,
  },
  {
    id: 7,
    name: "testimonials.user7.name",
    image: user7img,
    review: "testimonials.user7.review",
    rating: 5,
  },
  {
    id: 8,
    name: "testimonials.user8.name",
    image: user8img,
    review: "testimonials.user8.review",
    rating: 5,
  },
];

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* banner section */}
      <Slider />
      <section className="w-full py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-2 text-balance">
              {t(`home.heroTitle1`)} <br className="hidden sm:block" />
              {t(`home.heroTitle2`)}{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                {t(`home.heroTitleSpan`)}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              {t(`home.heroDescription`)}
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
                  {/* Product Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {/* {t(`products.${product.name.toLowerCase().replace(/[^a-z]/g, '')}`)}
                     */}
                    {t(product.name)}
                  </h3>

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
      <Video />

      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
              {t(`home.testimonialsTitle`)}
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto text-balance">
              {t(`home.testimonialsSubtitle`)}
            </p>
          </div>

          {/* Swiper Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop
              className="pb-12"
            >
              {defaultTestimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 h-full flex flex-col items-center text-center">
                    {/* Customer Image */}
                    <div className="relative mb-6">
                      <img
                        src={testimonial.image}
                        alt={t(testimonial.name)}
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-emerald-200 shadow-md hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 right-0 bg-emerald-500 rounded-full p-2 shadow-md">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Customer Name */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                      {t(testimonial.name)}
                    </h3>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-200 ${
                            i < testimonial.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                      "{t(testimonial.review)}" {/* <-- Updated */}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="swiper-button-prev absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 -ml-4 md:-ml-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="swiper-button-next absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 -mr-4 md:-mr-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
