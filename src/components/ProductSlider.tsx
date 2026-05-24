import { useTranslation } from "react-i18next";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import productbg1 from '../assets/productbg1.jpg';
import productbg2 from '../assets/productbg2.jpg';
import productbg3 from '../assets/productimg3.jpg';

const ProductSlider = () => {
  const { t } = useTranslation();

  const slides = [
    { img: productbg1, titleKey: "productSlider.slide1.title" },
    { img: productbg2, titleKey: "productSlider.slide2.title" },
    { img: productbg3, titleKey: "productSlider.slide3.title" },
  ];

  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt={`banner-${index}`}
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center pt-20 text-center px-4">
                <h1 className="text-white text-3xl md:text-4xl font-bold animate-fadeInDown">
                  {t(slide.titleKey)}
                </h1>
                <p className="text-white text-sm md:text-xl mt-6 max-w-5xl animate-fadeInUp leading-relaxed">
                  {t("productSlider.description")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;