import AboutSlider from "../../components/AboutSlider";
import aboutimg1 from "../../assets/about1.jpg";
import aboutimg2 from "../../assets/about2.jpg";
import { useState } from "react";
import user4img from '../../assets/user4.jpg'
import user5img from '../../assets/user5.jpg'
import user6img from '../../assets/user6.jpg'

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  interface Farmer {
    id: number;
    name: string;
    image: string;
    content: string;
  }

  const farmers: Farmer[] = [
    {
      id: 1,
      name: "করিম মিয়া",
      image: user4img,
      content:
        '"আমাদের উৎপাদিত পণ্য সরাসরি ক্রেতাদের কাছে পৌঁছানোর এই মাধ্যমটি অসাধারণ। এতে আমরা ফসলের সঠিক দাম পাচ্ছি এবং ক্রেতারাও ফ্রেশ সবজি পাচ্ছেন।"',
    },
    {
      id: 2,
      name: "রহমত আলী",
      image: user6img,
      content:
        '"কোনো মধ্যস্বত্বভোগী ছাড়া সরাসরি ব্যবসা করার সুযোগ পেয়ে আমরা কৃষকরা অত্যন্ত আনন্দিত। রাসায়নিক মুক্ত তাজা সবজি সবার ঘরে পৌঁছে দেওয়াই আমাদের লক্ষ্য।"',
    },
    {
      id: 3,
      name: "আব্দুল কুদ্দুস",
      image: user5img,
      content:
        '"অ্যাগ্রোমার্ট আমাদের পরিশ্রমের সঠিক মূল্যায়ন করেছে। এখন আমরা আত্মবিশ্বাসের সাথে আরও উন্নত মানের ও বিষমুক্ত ফসল চাষে মনোযোগ দিতে পারছি।"',
    },
    {
      id: 4,
      name: "সফুরন নেছা",
      image: user4img,
      content:
        '"নারী উদ্যোক্তা হিসেবে নিজের খামারের পণ্য সরাসরি বিক্রি করতে পারা আমার জন্য অনেক বড় প্রাপ্তি। ক্রেতাদের ভালো সাড়া পেয়ে আমি খুবই আনন্দিত।"',
    },
    {
      id: 5,
      name: "বিলাল হোসেন",
      image: user5img,
      content:
        '"মাঠের তাজা ফসল কোনো ঝামেলা ছাড়াই সরাসরি ক্রেতার রান্নাঘরে পৌঁছে যাচ্ছে। এই আধুনিক চাষাবাদ ও বিপণন ব্যবস্থা আমাদের জীবন বদলে দিয়েছে।"',
    },
    {
      id: 6,
      name: "সামসুল হক",
      image: user6img,
      content:
        '"আমরা সম্পূর্ণ প্রাকৃতিকভাবে এবং পরম যত্নে প্রতিটি ফসল ফলাই। এই প্ল্যাটফর্মের মাধ্যমে ক্রেতারাও শতভাগ খাঁটি ও সতেজ পণ্যের নিশ্চয়তা পাচ্ছেন।"',
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

      <section className="about  pb-5 bg-gradient-to-r from-yellow-300 to-pink-400">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex flex-wrap  ">
            {/* First Column */}
            <div className="w-full lg:w-1/2 pt-28  first px-3">
              <figure>
                <img
                  src={aboutimg1}
                  alt="about-img"
                  className="w-full h-auto"
                />
              </figure>

              <div className="mt-3">
                <h1 className="text-[2rem] font-bold">
                  অ্যাগ্রোমার্ট গ্রুপ আসলে কারা?
                </h1>

                <p className="text-[1.25rem] mt-2 leading-relaxed font-semibold">
                  আমরা আপনার ফসল উৎপাদনের নির্ভরযোগ্য অংশীদার। অ্যাগ্রোমার্ট গ্রুপ ভালো করেই বোঝে যে চাষাবাদ কেবল কোনো ব্যবসা নয়, এটি একটি জীবনধারা। আপনি চাষ করেন কারণ আপনি রোপণ মৌসুম থেকে শুরু করে ফসল কাটা পর্যন্ত আপনার ফসলের যত্ন নিতে ভালোবাসেন। চাষাবাদ ছাড়া অন্য কিছু করার কথা আপনি ভাবতেই পারেন না। অ্যাগ্রোমার্ট গ্রুপে আমরা আপনার এই আবেগ ও পরিশ্রমকে গভীরভাবে উপলব্ধি করি।
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="w-full lg:w-2/5 pt-96  second px-6">
              <figure>
                <img
                  src={aboutimg2}
                  alt="about-img"
                  className="w-[95%] h-[180px] object-cover"
                />
              </figure>

              <div className="mt-3">
                <h1 className="text-[2rem] font-bold">আমাদের লক্ষ্য</h1>

                <p className="text-[1.25rem] mt-2 leading-relaxed font-semibold">
                  আমরা আপনার ফসল উৎপাদনের নির্ভরযোগ্য অংশীদার। অ্যাগ্রোমার্ট গ্রুপ বিশ্বাস করে যে কৃষি শুধু জীবিকা নয়, এটি দেশের অর্থনৈতিক মেরুদণ্ড। চাষের শুরু থেকে ফসল ঘরে তোলা পর্যন্ত প্রতিটি ধাপে কৃষকদের পাশে থাকাই আমাদের মূল লক্ষ্য।
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
              আমাদের কঠোর পরিশ্রমী কৃষকবৃন্দ
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
              গুণগত মান, সতেজতা এবং নির্ভরযোগ্য সেবার জন্য ক্রেতাদের কাছে বিশ্বস্ত। আমরা মাঠ থেকে সরাসরি আপনার টেবিলে সেরা পণ্যটি পৌঁছে দিতে নিরলসভাবে কাজ করে যাচ্ছি।
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
                      alt={farmer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8">
                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {farmer.name}
                    </h3>

                    {/* Quote */}
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed italic border-l-4 border-green-500 pl-4">
                      {farmer.content}
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