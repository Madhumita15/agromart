import { useTranslation } from 'react-i18next';

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-10">
      <div className="w-full">
        <div className="text-center mb-6 px-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            {t('videoSection.headingLine1')} <br /> 
            {t('videoSection.headingLine2')}
          </h1>

          <h5 className="text-sm md:text-base mt-4 text-gray-700 max-w-3xl mx-auto">
            {t('videoSection.subheading')}
          </h5>
        </div>

        <div className="w-full flex justify-center">
          <iframe
            className="w-full md:w-[100%] h-[250px] md:h-[500px]"
            src="https://www.youtube.com/embed/wcGxK7C2ca0?si=D5UpCdc3RmXHhN3n"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;