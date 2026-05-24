import AboutSlider from "../../components/AboutSlider";
import aboutimg1 from "../../assets/about1.jpg";
import aboutimg2 from "../../assets/about2.jpg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import user4img from '../../assets/user4.jpg';
import user5img from '../../assets/user5.jpg';
import user6img from '../../assets/user6.jpg';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  interface Farmer {
    id: number;
    nameKey: string;
    image: string;
    contentKey: string;
  }

  const farmers: Farmer[] = [
    {
      id: 1,
      nameKey: "aboutPage.farmers.farmer1.name",
      image: user4img,
      contentKey: "aboutPage.farmers.farmer1.content",
    },
    {
      id: 2,
      nameKey: "aboutPage.farmers.farmer2.name",
      image: user6img,
      contentKey: "aboutPage.farmers.farmer2.content",
    },
    {
      id: 3,
      nameKey: "aboutPage.farmers.farmer3.name",
      image: user5img,
      contentKey: "aboutPage.farmers.farmer3.content",
    },
    {
      id: 4,
      nameKey: "aboutPage.farmers.farmer4.name",
      image: user4img,
      contentKey: "aboutPage.farmers.farmer4.content",
    },
    {
      id: 5,
      nameKey: "aboutPage.farmers.farmer5.name",
      image: user5img,
      contentKey: "aboutPage.farmers.farmer5.content",
    },
    {
      id: 6,
      nameKey: "aboutPage.farmers.farmer6.name",
      image: user6img,
      contentKey: "aboutPage.farmers.farmer6.content",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + farmers.length) % farmers.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % farmers.length);
  };

  const getVisibleFarmers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(farmers[(currentIndex + i) % farmers.length]);
    }
    return visible;
  };

  return (
    <>
      <AboutSlider />

      <section className="about pb-5 bg-gradient-to-r from-yellow-300 to-pink-400">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex flex-wrap">
            {/* First Column */}
            <div className="w-full lg:w-1/2 pt-28 first px-3">
              <figure>
                <img
                  src={aboutimg1}
                  alt="about-img"
                  className="w-full h-auto"
                />
              </figure>

              <div className="mt-3">
                <h1 className="text-[2rem] font-bold">
                  {t("aboutPage.whoWeAreTitle")}
                </h1>

                <p className="text-[1.25rem] mt-2 leading-relaxed font-semibold">
                  {t("aboutPage.whoWeAreDesc")}
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="w-full lg:w-2/5 pt-96 second px-6">
              <figure>
                <img
                  src={aboutimg2}
                  alt="about-img"
                  className="w-[95%] h-[180px] object-cover"
                />
              </figure>

              <div className="mt-3">
                <h1 className="text-[2rem] font-bold">{t("aboutPage.ourMissionTitle")}</h1>

                <p className="text-[1.25rem] mt-2 leading-relaxed font-semibold">
                  {t("aboutPage.ourMissionDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {t("aboutPage.farmersHeaderTitle")}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t("aboutPage.farmersHeaderDesc")}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Slides */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {getVisibleFarmers().map((farmer) => (
                <div
                  key={farmer.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100 hover:border-green-300"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-green-200 to-green-100">
                    <img
                      src={farmer.image}
                      alt={t(farmer.nameKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8">
                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {t(farmer.nameKey)}
                    </h3>

                    {/* Quote */}
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed italic border-l-4 border-green-500 pl-4">
                      {t(farmer.contentKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-10 md:mt-12">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
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

              {/* Indicator Dots */}
              <div className="flex gap-2">
                {farmers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-green-600 w-3 h-3 md:w-4 md:h-4"
                        : "bg-green-300 w-2 h-2 md:w-3 md:h-3 hover:bg-green-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
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
        </div>
      </section>
    </>
  );
};

export default About;