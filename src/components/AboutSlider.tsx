import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images (adjust paths as needed)
import bgimg4 from "../assets/bgimg6.jpg";
import bgimg5 from "../assets/bgimg7.jpg";
import bgimg6 from "../assets/bgimg9.jpg";

const AboutSlider = () => {
  const slides = [
    { img: bgimg4, title: "আপনার ফসল উৎপাদনের নির্ভরযোগ্য অংশীদার" },
    { img: bgimg5, title: "বিশেষজ্ঞ কৃষি সমাধান" },
    { img: bgimg6, title: "টেকসই কৃষির ভবিষ্যৎ" },
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
        loop={true} // Smooth fade transition like Bootstrap
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
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center pt-60 text-center px-4">
                <h1 className="text-white text-3xl md:text-4xl  font-bold animate-fadeInDown">
                  {slide.title}
                </h1>
                <p className="text-white text-sm md:text-xl mt-9 max-w-5xl animate-fadeInUp">
                  দি অ্যাগ্রোমার্ট গ্রুপ পূর্ব কানাডা জুড়ে কৃষি উৎপাদনকারী ও কৃষকদের সার, ফসল সুরক্ষা, কাস্টম অ্যাপ্লিকেশন (বিশেষায়িত সার ও কীটনাশক প্রয়োগ), বীজ পণ্য এবং সংশ্লিষ্ট অন্যান্য সেবা প্রদান করে থাকে।
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSlider;