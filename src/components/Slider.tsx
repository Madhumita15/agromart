import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your images (adjust paths as needed)
import bgimg1 from '../assets/bgimg1.jpg';
import bgimg2 from '../assets/bgimg3.jpg';
import bgimg3 from '../assets/bgimg4.jpg';

const Slider = () => {
  const { t } = useTranslation();

  const slides = [
    { img: bgimg1, titleKey: "slider.slide1.title" },
    { img: bgimg2, titleKey: "slider.slide2.title" },
    { img: bgimg3, titleKey: "slider.slide3.title" },
  ];

  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
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
                  {t(slide.titleKey)} {/* <-- Hooked to translations */}
                </h1>
                <p className="text-white text-sm md:text-xl mt-6 max-w-5xl animate-fadeInUp leading-relaxed">
                  {t('slider.description')} {/* <-- Hooked to shared description key */}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;